const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const Authgurd = require("../Authgurd/Authgurd");
const Post = require("../Models/Post-model");
const jwt = require('jsonwebtoken');
const Posts = require("../Models/Post-model");
const fs = require('fs');


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

        }
        else {

            cb(new Error("file type is not supported"), false);
        }

    }
});


// get timeline post
router.get('/timelinePost', Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId).populate("timelinePost");
        const { timelinePost, ...others } = user._doc;

        const allPost = await Promise.all(timelinePost.map(post => {
            return Post.find({ _id: post._id }).populate({ path: 'userId', select: 'firstName sureName profilePicture' }).populate({ path: 'comments.user', select: 'firstName sureName profilePicture' }).populate("comments.replaies.user", "firstName sureName profilePicture");
        }));

        const sendAbbleData = allPost.map(post => {
            return post[0]._doc;

        })

        res.status(200).json(sendAbbleData);

    } catch (error) {

        res.status(400).json(error);
    }
});


// cover photo upload

router.post("/updateCoverPhoto", Authgurd, upload.single("coverPhoto"), async (req, res) => {

    const file = req.file;

    try {

        const user = await User.findById(req.userId);
        user.coverPicture = file.filename;
        user.AllCoverPhotos.push(file.filename);
        user.uploads.push(file.filename);
        await user.save();

        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error)
    }
});


// profile photo update


router.post("/updateProfilePhoto", Authgurd, upload.single("profilePhoto"), async (req, res) => {

    const file = req.file;

    try {

        const user = await User.findById(req.userId);
        user.profilePicture = file.filename;
        user.allProfilePicture.push(file.filename);
        user.uploads.push(file.filename);
        await user.save();

        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error)
    }
});


// cover photo update by name

router.get("/updateCoverPhotoByName/:name", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        user.coverPicture = req.params.name;
        const hasCoverPhoto = user.AllCoverPhotos.includes(req.params.name);

        if (!hasCoverPhoto) {
            user.AllCoverPhotos.push(req.params.name);
        }

        await user.save();
        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
})

// profile picture update by name

router.get("/updateProfilePhotoByName/:name", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        user.profilePicture = req.params.name;
        const hasProfilePicture = user.allProfilePicture.includes(req.params.name);

        if (!hasProfilePicture) {
            user.allProfilePicture.push(req.params.name);
        }

        await user.save();
        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
})


// updateBiogrophy


router.post("/updateBiography", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        await User.findByIdAndUpdate(req.userId, {
            $set: {
                ...req.body
            }
        });
        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});

// photo delete

router.delete("/photoDelete/:name", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId).populate("timelinePost");
        const hasProfilePicture = user.allProfilePicture.find(photo => photo === req.params.name);
        const hasCoverPhoto = user.AllCoverPhotos.find(photo => photo === req.params.name);

        const hasPost = user.timelinePost.map(post => {
            return post.image === req.params.name
        });

        if (hasProfilePicture) {
            user.allProfilePicture = user.allProfilePicture.filter(name => name !== req.params.name);
            if (user.allProfilePicture.length === 0) {
                user.profilePicture = "";
            } else {
                user.profilePicture = user.allProfilePicture[0];
            }
        }

        if (hasCoverPhoto) {
            user.AllCoverPhotos = user.AllCoverPhotos.filter(name => name !== req.params.name);
            if (user.AllCoverPhotos.length === 0) {
                user.coverPicture = "";
            } else {
                user.coverPicture = user.AllCoverPhotos[0];
            }
        }

        if (hasPost.includes(true)) {
            user.timelinePost = user.timelinePost.filter(post => post.image !== req.params.name);
        }

        user.uploads = user.uploads.filter(name => name !== req.params.name);

        const oldPhoto = req.params.name;
        const uploadDir = "uploads/images/";
        const oldPhotoWithPath = uploadDir + oldPhoto;

        if (fs.existsSync(oldPhotoWithPath)) {
            fs.unlink(oldPhotoWithPath, (err) => {
                if (err) {
                    console.log("Culd not delete photos")
                } else {
                    console.log("deleted")
                }
            });
        }

        await user.save();
        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }

})

// refresh token

router.get("/userRefresh", Authgurd, async (req, res) => {

    try {

        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});


module.exports = router;