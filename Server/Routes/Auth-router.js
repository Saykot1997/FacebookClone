const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register

router.post("/register", async (req, res) => {

    const { firstName, sureName, password, birthDay, gender } = req.body;

    if (firstName && sureName && password && birthDay && gender) {

        if (!req.body.email && !req.body.mobileNumber) {
            res.status(403).json("Email or MobileNumber is required")
        }

        const user = new User({
            firstName,
            sureName,
            birthDay,
            gender
        })

        req.body.email ? user.email = req.body.email : user.mobileNumber = req.body.mobileNumber;

        try {

            let findUserEmail
            let findUserMobileNumber

            if (user.email) {

                findUserEmail = await User.findOne({ email: user.email });

            } else {

                findUserMobileNumber = await User.findOne({ mobileNumber: user.mobileNumber })
            }

            if (findUserEmail) {

                res.status(403).json("User email should be unique");

            } else if (findUserMobileNumber) {

                res.status(403).json("User mobile number should be unique");

            } else {

                const allIndesv = await User.collection.getIndexes();

                await User.collection.dropIndexes();

                const salt = await bcrypt.genSalt(10);
                const saltPassword = await bcrypt.hash(password, salt);
                user.password = saltPassword;
                const newUser = await user.save();
                res.status(200).json(newUser);
            }

        } catch (error) {

            res.status(400).json(error);
            console.log(error);
        }

    } else {

        res.status(400).json("Please fill all the fields");
    }

});


// Login route

router.post("/login", async (req, res) => {

    const { email, mobileNumber, password } = req.body;

    if (password && email || mobileNumber) {

        try {

            let user

            if (email) {

                user = await User.findOne({ email });

            } else {

                user = await User.findOne({ mobileNumber });
            }

            if (!user) {

                res.status(400).json("User not found");

            } else {

                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {

                    res.status(400).json("Incorrect password");

                } else {

                    const token = jwt.sign({ id: user._id, role: user.role, userName: user.firstName }, process.env.TOKENSECRATE);

                    const { password, timelinePost, updatedAt, createdAt, ...rest } = user._doc;

                    res.status(200).json({ ...rest, token });

                }
            }

        } catch (error) {

            res.status(400).json(error);
            console.log(error);
        }

    } else {

        res.status(400).json("Please fill all the fields");
    }
});


module.exports = router;