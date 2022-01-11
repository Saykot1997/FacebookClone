const express = require('express');
const router = express.Router();
const Post = require("../Models/Post-model");
const Authgurd = require("../Authgurd/Authgurd");
const User = require("../Models/User-model");

// createa a new post

router.post('/create', Authgurd, async (req, res) => {
    const { desc, image } = req.body;

    const post = {
        userId: req.userId,
        desc,
    }

    if (image) { post.image = image }

    try {

        const newPost = new Post(post);
        const postSaved = await newPost.save();
        res.status(201).json(postSaved);

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
});

// get a posts by userId

router.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);
        res.status(200).json(post);

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })

    }

});

// update post by id

router.put("/update/:id", Authgurd, async (req, res) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);

        if (post.userId != req.userId) {

            res.status(401).json({
                message: "you can not update this post"
            })

        } else {

            const { desc, image } = req.body;

            if (desc) { post.desc = desc }
            if (image) { post.image = image }

            const postUpdated = await post.save();
            res.status(200).json(postUpdated);
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
});


// delete post by id


router.delete("/delete/:id", Authgurd, async (req, res) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);

        if (post.userId != req.userId) {

            res.status(401).json({
                message: "you can not delete this post"
            })

        } else {

            await post.remove();
            res.status(200).json("post deleted");
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
});


// like and dislike post

router.put("/like/:id", Authgurd, async (req, res) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);

        const hasLike = post.likes.find(like => like == req.userId);

        if (hasLike) {

            post.likes = post.likes.filter(like => like != req.userId);
            await post.save();
            res.status(200).json("post disliked");

        } else {

            post.likes.push(req.userId);
            await post.save();
            res.status(200).json("post liked");
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }

});

// timeline posts 

router.get("/timeline/all", Authgurd, async (req, res) => {

    try {
        const curantUser = await User.findById(req.userId);
        const userPost = await Post.find({ userId: curantUser._id });
        const friendsPost = await Promise.all(curantUser.flowings.map(friendId => {
            return Post.find({ userId: friendId });
        }));

        res.status(200).json(
            userPost.concat(...friendsPost)
        );

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }

});



// create comments
router.put('/comments/:id', Authgurd, async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);

        if (post) {

            const postComment = await Post.findOneAndUpdate({ _id: req.params.id }, {
                $set: {
                    comments: [...post.comments,
                    {
                        user: req.userId,
                        comments: req.body.comments
                    }]

                }
            }
                , { new: true })

            res.status(200).json(postComment)

        } else {

            res.status(400).json("could not find the post")
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }

});

// update comment
router.put('/comments/eddit/:id', Authgurd, async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);
        const commentId = req.body.commentId;
        const comment = req.body.comments;

        if (!commentId || !comment) {

            res.status(400).json("comment id or comment is missing")

        } else {

            if (post) {

                const updateAbleCom = post.comments.find((comment) => comment._id == commentId);

                if (!updateAbleCom) {

                    res.status(403).json("could not find comment")

                } else {

                    if (updateAbleCom.user != req.userId) {

                        res.status(403).json("you can't change the comment")

                    } else {

                        const updateComment = { ...updateAbleCom._doc, comments: comment }
                        const allComents = post.comments.map((comment) => comment._id == commentId ? updateComment : comment)

                        const updateSingleComment = await Post.findOneAndUpdate({ _id: req.params.id }, {
                            $set: {
                                comments: allComents
                            }
                        }, { new: true })

                        res.status(200).json(updateSingleComment);
                    }
                }

            } else {

                res.status(400).json("could not find comment")
            }

        }

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }

});


// delete comment
router.put('/comments/delete/:id', Authgurd, async (req, res) => {

    try {

        const post = await Post.findById(req.params.id);
        const commentId = req.body.commentId

        if (!commentId) {

            res.status(500).json("deleteable comment id requre");

        } else {

            if (post) {

                const deleteAbleCom = post.comments.find((comment) => comment._id == commentId);

                if (!deleteAbleCom) {

                    res.status(403).json("comment could not found");

                } else {

                    if (deleteAbleCom.user != req.userId) {

                        res.status(403).json("you can't delete the comment")

                    } else {

                        const allComents = post.comments.filter((comment) => comment._id != commentId)

                        const updateSingleComment = await Post.findOneAndUpdate({ _id: req.params.id }, {
                            $set: {
                                comments: allComents
                            }
                        }, { new: true })

                        res.status(200).json(updateSingleComment._doc)

                    }
                }

            } else {

                res.status(400).json("could not find the post")
            }
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }

});


module.exports = router;