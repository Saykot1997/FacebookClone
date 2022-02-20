const express = require('express');
const router = express.Router();
const Post = require("../Models/Post-model");
const User = require("../Models/User-model")
const Authgurd = require("../Authgurd/Authgurd");
const fs = require("fs")

// image upload require functions
const multer = require('multer');

// multer images upload

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        if (
            file.mimetype === 'image/jpeg' ||
            file.mimetype === 'image/png' ||
            file.mimetype === 'image/jpg' ||
            file.mimetype === 'image/gif') {

            cb(null, './uploads/images');

        } else if (
            file.mimetype === "video/mp4" ||
            file.mimetype === "video/avi" ||
            file.mimetype === "video/mkv" ||
            file.mimetype === "video/flv" ||
            file.mimetype === "video/wmv" ||
            file.mimetype === "video/mov" ||
            file.mimetype === "video/mpg" ||
            file.mimetype === "video/mpeg" ||
            file.mimetype === "video/3gp" ||
            file.mimetype === "video/3gpp" ||
            file.mimetype === "video/3g2" ||
            file.mimetype === "video/3gpp2" ||
            file.mimetype === "video/webm" ||
            file.mimetype === "video/ogg" ||
            file.mimetype === "video/quicktime" ||
            file.mimetype === "video/x-msvideo" ||
            file.mimetype === "video/x-ms-wmv" ||
            file.mimetype === "video/x-ms-asf") {

            cb(null, './uploads/videos');

        } else {

            cd("file does not match");
        }

    },

    filename: (req, file, cb) => {

        cb(null, req.userName.toLowerCase() + "-" + Date.now() + "-" + file.originalname)
    }
})

const upload = multer({
    storage: storage, fileFilter: (req, file, cb) => {
        if (
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png"
        ) {
            cb(null, true);

        } else if (
            file.mimetype === "video/mp4" ||
            file.mimetype === "video/avi" ||
            file.mimetype === "video/mkv" ||
            file.mimetype === "video/flv" ||
            file.mimetype === "video/wmv" ||
            file.mimetype === "video/mov" ||
            file.mimetype === "video/mpg" ||
            file.mimetype === "video/mpeg" ||
            file.mimetype === "video/3gp" ||
            file.mimetype === "video/3gpp" ||
            file.mimetype === "video/3g2" ||
            file.mimetype === "video/3gpp2" ||
            file.mimetype === "video/webm" ||
            file.mimetype === "video/ogg" ||
            file.mimetype === "video/quicktime" ||
            file.mimetype === "video/x-msvideo" ||
            file.mimetype === "video/x-ms-wmv" ||
            file.mimetype === "video/x-ms-asf") {

            cb(null, true);
        }
        else {

            cb(new Error("file type is not supported"), false);
        }

    }
})

// createa a new post

router.post('/create', Authgurd, upload.single("file"), async (req, res) => {

    const desc = req.body.post;
    const { file } = req;

    const post = {
        userId: req.userId,
        desc,
    }

    if (file) {

        if (req.file.mimetype === "image/jpg" ||
            req.file.mimetype === "image/jpeg" ||
            req.file.mimetype === "image/png") {

            post.image = req.file.filename;

        } else if (req.file.mimetype === "video/mp4" ||
            req.file.mimetype === "video/avi" ||
            req.file.mimetype === "video/mkv" ||
            req.file.mimetype === "video/flv" ||
            req.file.mimetype === "video/wmv" ||
            req.file.mimetype === "video/mov" ||
            req.file.mimetype === "video/mpg" ||
            req.file.mimetype === "video/mpeg" ||
            req.file.mimetype === "video/3gp" ||
            req.file.mimetype === "video/3gpp" ||
            req.file.mimetype === "video/3g2" ||
            req.file.mimetype === "video/3gpp2" ||
            req.file.mimetype === "video/webm" ||
            req.file.mimetype === "video/ogg") {

            post.video = req.file.filename;
        }
    }

    try {

        const user = await User.findById(req.userId);
        const newPost = new Post(post);
        const postSaved = await newPost.save();
        user.timelinePost = [
            ...user.timelinePost,
            postSaved._id
        ];

        if (post.video) {
            user.videos = [
                ...user.videos,
                req.file.filename
            ];

        } else if (post.image) {
            user.uploads = [
                ...user.uploads,
                req.file.filename
            ]
        }

        await user.save()

        const SavedNewPost = await Post.findById(postSaved._id).populate("userId", "firstName sureName");
        const SavedUser = await User.findById(req.userId);
        res.status(201).json(SavedNewPost);
    }
    catch (err) {
        console.log(err);

        res.status(400).json({
            message: err.message
        })
    }
});

// get a post by userId

router.get("/:id", async (req, res) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");
        res.status(200).json(post);

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })

    }

});



// feed posts 

router.get("/feed/all", Authgurd, async (req, res) => {

    try {

        const curantUser = await User.findById(req.userId);

        const allFriends = curantUser.friends;
        // console.log(allFriends);
        const allFlowings = curantUser.flowings;
        // console.log(allFlowings);

        const findAllSendAblePost = [];

        allFriends.forEach(friend => {

            findAllSendAblePost.push(friend);

            allFlowings.forEach(flow => {

                if (friend !== flow) {
                    findAllSendAblePost.push(flow);
                }
            })
        })

        // console.log(findAllSendAblePost);

        const userPost = await Post.find({ userId: curantUser._id }).populate({ path: 'userId', select: 'firstName sureName profilePicture' }).populate({ path: 'comments.user', select: 'firstName sureName profilePicture' }).populate("comments.replaies.user", "firstName sureName profilePicture");

        const flowingsPost = await Promise.all(findAllSendAblePost.map(friendId => {
            return Post.find({ userId: friendId }).populate({ path: 'userId', select: 'firstName sureName profilePicture' }).populate({ path: 'comments.user', select: 'firstName sureName profilePicture' }).populate("comments.replaies.user", "firstName sureName profilePicture");
        }));

        res.status(200).json(
            userPost.concat(...flowingsPost)
        );

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }

});



// update post by id

router.post("/update/:id", Authgurd, upload.single("file"), async (req, res) => {

    const { desc } = req.body;
    const { file } = req;

    const post = {
        userId: req.userId,
        desc,
    }

    if (file) {

        if (req.file.mimetype === "image/jpg" ||
            req.file.mimetype === "image/jpeg" ||
            req.file.mimetype === "image/png") {

            post.image = req.file.filename;
            post.video = "";

        } else if (req.file.mimetype === "video/mp4" ||
            req.file.mimetype === "video/avi" ||
            req.file.mimetype === "video/mkv" ||
            req.file.mimetype === "video/flv" ||
            req.file.mimetype === "video/wmv" ||
            req.file.mimetype === "video/mov" ||
            req.file.mimetype === "video/mpg" ||
            req.file.mimetype === "video/mpeg" ||
            req.file.mimetype === "video/3gp" ||
            req.file.mimetype === "video/3gpp" ||
            req.file.mimetype === "video/3g2" ||
            req.file.mimetype === "video/3gpp2" ||
            req.file.mimetype === "video/webm" ||
            req.file.mimetype === "video/ogg") {

            post.video = req.file.filename;
            post.image = "";
        }
    }

    try {

        const user = await User.findById(req.userId);
        const updateAblePost = await Post.findById(req.params.id);

        if (updateAblePost.userId.toString() !== req.userId.toString()) {

            return res.status(401).json({
                message: "you are not authorized to update this post"
            });

        } else {

            if (post.image || post.video) {

                if (updateAblePost.image) {
                    const oldPhoto = updateAblePost.image;
                    const uploadDir = "uploads/images/";
                    const oldPhotoWithPath = uploadDir + oldPhoto;

                    if (fs.existsSync(oldPhotoWithPath)) {
                        fs.unlink(oldPhotoWithPath, (err) => {
                            if (err) { new Error("Culd not delete photos") }
                        });
                    }

                }


                if (updateAblePost.video) {

                    const oldVideo = updateAblePost.video;
                    const uploadDir = "uploads/videos/";
                    const oldVideoWithPath = uploadDir + oldVideo;

                    if (fs.existsSync(oldVideoWithPath)) {

                        fs.unlink(oldVideoWithPath, (err) => {
                            if (err) { new Error("Culd not delete Video") }
                        });
                    }
                }

                if (post.image) {

                    const postImage = user.uploads.find(video => video == updateAblePost.image);

                    if (postImage) {

                        user.uploads.pull(postImage);
                        user.uploads.push(req.file.filename);
                        await user.save();

                    } else {

                        user.videos.pull(updateAblePost.video);
                        user.uploads.push(req.file.filename);
                        await user.save();
                    }


                } else if (post.video) {

                    const postVideo = user.videos.find(video => video == updateAblePost.video);

                    if (postVideo) {

                        user.videos.pull(postVideo);
                        user.videos.push(req.file.filename);
                        await user.save();

                    } else {

                        user.uploads.pull(updateAblePost.image);
                        user.videos.push(req.file.filename);
                        await user.save();
                    }
                }

            }

            const postUpdated = await Post.findByIdAndUpdate(req.params.id, post, { new: true }).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");

            const SavedUser = await User.findById(req.userId);
            console.log(SavedUser);
            res.status(201).json(postUpdated);
        }
    }
    catch (err) {

        res.status(400).json({
            message: err.message
        })
    }
});


// delete post by id


router.delete("/delete/:id", Authgurd, async (req, res) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);
        const user = await User.findById(req.userId);

        if (post.userId != req.userId) {

            res.status(401).json({
                message: "you can not delete this post"
            })

        } else {

            if (post.image) {

                const oldPhoto = post.image;
                const uploadDir = "uploads/images/";
                const oldPhotoWithPath = uploadDir + oldPhoto;

                if (fs.existsSync(oldPhotoWithPath)) {
                    fs.unlink(oldPhotoWithPath, (err) => {
                        if (err) { new Error("Culd not delete photos") }
                    });
                }

                const hasProfilePicture = user.allProfilePicture.find(photo => photo === post.image);
                const hasCoverPhoto = user.AllCoverPhotos.find(photo => photo === post.image);

                if (hasProfilePicture) {
                    user.allProfilePicture = user.allProfilePicture.filter(name => name !== post.image);
                    if (user.allProfilePicture.length === 0) {
                        user.profilePicture = "";
                    } else {
                        user.profilePicture = user.allProfilePicture[0];
                    }
                }

                if (hasCoverPhoto) {
                    user.AllCoverPhotos = user.AllCoverPhotos.filter(name => name !== post.image);
                    if (user.AllCoverPhotos.length === 0) {
                        user.coverPicture = "";
                    } else {
                        user.coverPicture = user.AllCoverPhotos[0];
                    }
                }

                user.uploads = user.uploads.filter(name => name !== post.image);
            }

            if (post.video) {

                const oldVideo = post.video;
                const uploadDir = "uploads/videos/";
                const oldVideoWithPath = uploadDir + oldVideo;

                if (fs.existsSync(oldVideoWithPath)) {
                    fs.unlink(oldVideoWithPath, (err) => {
                        if (err) { new Error("Culd not delete Video") }
                    });
                }

                user.videos = user.videos.filter(name => name !== post.video);
            }


            const deleteablePost = user.timelinePost.find((post) => post == post._id);
            user.timelinePost.pull(deleteablePost);
            await post.remove();
            await user.save();
            const SavedUser = await User.findById(req.userId);
            console.log(SavedUser);
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

router.get("/like/:id", Authgurd, async (req, res) => {

    const { id } = req.params;

    try {

        const post = await Post.findById(id);

        const hasLike = post.likes.find(like => like == req.userId);

        if (hasLike) {

            post.likes = post.likes.filter(like => like != req.userId);
            await post.save();
            const likedPost = await Post.findById(id).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");
            res.status(200).json(likedPost);

        } else {

            post.likes.push(req.userId);
            await post.save();
            const disLikedPost = await Post.findById(id).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");
            res.status(200).json(disLikedPost);
        }

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }

});



// comment on post

router.post("/comment/:id", Authgurd, async (req, res) => {

    const { id } = req.params;
    const { comment } = req.body;

    try {

        const post = await Post.findById(id);

        const newComment = {
            user: req.userId,
            comentData: comment
        }

        post.comments.push(newComment);
        await post.save();
        const commentPost = await Post.findById(id).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");
        res.status(200).json(commentPost);

    } catch (error) {

        console.log(error)
        res.status(400).json({
            message: error.message
        })
    }
});



// comment update

router.put("/comment/edit/:postId/:commentId", Authgurd, async (req, res) => {

    const { postId, commentId } = req.params;
    const { comment } = req.body;
    const { userId } = req


    try {
        const post = await Post.findById(postId);
        const updateAblecomment = post.comments.find(comment => comment._id.toString() === commentId.toString());

        if (updateAblecomment.user.toString() !== userId.toString()) {

            return res.status(401).json({
                message: "you are not authorized to update this comment"
            });

        } else {

            updateAblecomment.comentData = comment;
            await post.save();
            const updatedPost = await Post.findById(postId).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");
            res.status(200).json(updatedPost);
        }

    } catch (err) {
        console.log(err);
    }

});


// comment delete 

router.delete("/comment/delete/:postId/:commentId", Authgurd, async (req, res) => {

    const { postId, commentId } = req.params;

    try {
        const post = await Post.findById(postId);
        const comment = post.comments.find(comment => comment._id.toString() === commentId.toString());
        post.comments.pull(comment);
        await post.save();
        const updatedPost = await Post.findById(postId).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");;
        res.status(200).json(updatedPost);

    } catch (err) {
        console.log(err);
    }

})


// like a comment

router.get("/commet/like/:commentId/:postId", Authgurd, async (req, res) => {

    const { commentId } = req.params;
    const { userId } = req;
    const { postId } = req.params;

    try {

        const post = await Post.findById(postId);

        const comment = post.comments.find(comment => comment._id.toString() === commentId.toString());

        if (comment.likes.length > 0) {

            const hasLike = comment.likes.find(like => like == req.userId);

            if (hasLike) {

                comment.likes.pull(userId);
                await post.save();

                const postUpdated = await Post.findByIdAndUpdate(postId, post, { new: true }).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");

                res.status(201).json(postUpdated);

            } else {

                comment.likes.unshift(userId);
                await post.save();

                const postUpdated = await Post.findByIdAndUpdate(postId, post, { new: true }).populate("userId", "firstName sureName").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");

                res.status(201).json(postUpdated);
            }

        } else {

            comment.likes.unshift(userId);
            await post.save();

            const postUpdated = await Post.findByIdAndUpdate(postId, post, { new: true }).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");

            res.status(201).json(postUpdated);
        }

    } catch (err) {

        console.log(err);
        res.status(400).json({
            message: err.message
        })
    }

});

// comment reply

router.post("/comment/replay/:postId/:commentId", Authgurd, async (req, res) => {

    const { postId, commentId } = req.params;
    const { reply } = req.body;
    const { userId } = req;

    try {

        const post = await Post.findById(postId);
        const comment = post.comments.find(comment => comment._id.toString() === commentId.toString());

        comment.replaies.unshift({
            user: userId,
            replayData: reply
        });

        await post.save();
        const updatedPost = await Post.findById(postId).populate("userId", "firstName sureName profilePicture").populate("comments.user", "firstName sureName profilePicture").populate("comments.replaies.user", "firstName sureName profilePicture");
        res.status(200).json(updatedPost);

    } catch (err) {
        console.log(err);
    }

});

// delete photo

router.delete("/photoDelete/:photo", Authgurd, async (req, res) => {

    const photoName = req.params.photo;

    console.log(photoName);
    console.log(req.userId);

    try {

        res.send("ok");

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }

})

module.exports = router;