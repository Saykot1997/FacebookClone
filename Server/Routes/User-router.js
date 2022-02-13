const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const Authgurd = require("../Authgurd/Authgurd");
const Post = require("../Models/Post-model");
const jwt = require('jsonwebtoken');



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
})

// update user

// router.put('/:id', Authgurd, async (req, res) => {

//     const { id } = req.params;

//     if (req.userId != id) {

//         res.status(401).json({
//             message: "Unauthorized"
//         })

//     } else {

//         try {

//             if (req.body.password) {

//                 req.body.password = await bcrypt.hash(req.body.password, 10);
//             }

//             const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
//             res.json(updateUser);

//         } catch (error) {

//             res.status(400).json(error);
//             console.log(error);
//         }
//     }
// });


// user delete 

// router.delete('/:id', Authgurd, async (req, res) => {

//     const { id } = req.params;

//     if (req.userId != id) {

//         res.status(401).json({
//             message: "Unauthorized"
//         })

//     } else {

//         try {

//             await User.findByIdAndDelete(id);
//             res.status(200).json("User deleted");

//         } catch (error) {

//             res.status(400).json(error);
//             console.log(error);
//         }
//     }

// });


// get user by id

// router.get('/:id', async (req, res) => {

//     const { id } = req.params;

//     try {

//         const getUser = await User.findById(id);
//         const { password, ...others } = getUser._doc;
//         res.status(200).json(others);

//     } catch (error) {

//         res.status(400).json(error);
//         console.log(error);
//     }

// });


// flow a user

// router.put("/flow/:id", Authgurd, async (req, res) => {

//     const { id } = req.params;

//     if (req.userId == id) {

//         res.status(400).json("You can't flow yourself");

//     } else {

//         try {

//             const user = await User.findById(id);
//             const currentUser = await User.findById(req.userId);

//             if (user.flowers.includes(req.userId)) {

//                 res.status(400).json("User already flowing");

//             } else {

//                 user.flowers.push(req.userId);
//                 await user.save();

//                 currentUser.flowings.push(id);
//                 await currentUser.save();

//                 res.status(200).json("User is flowings");

//             }

//         } catch (error) {

//             res.status(400).json(error);
//             console.log(error);
//         }

//     }

// });


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


// get all photos

router.get('/allPhotos', Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId).select("uploads AllCoverPhotos allProfilePicture");
        res.status(200).json({ uploads: user.uploads, coverPhotos: user.AllCoverPhotos, profilePictures: user.allProfilePicture });

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


// cover photo update by name

router.get("/updateCoverPhotoByName/:name", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        user.coverPicture = req.params.name;
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



module.exports = router;