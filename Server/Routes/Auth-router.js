const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register

router.post("/register", async (req, res) => {

    const { firstName, sureName, birthDay, gender, email } = req.body;

    const userPassword = req.body.password

    if (firstName && sureName && userPassword && birthDay && gender && email) {

        const user = new User({
            firstName,
            sureName,
            birthDay,
            gender,
            email
        })

        try {

            let findUserEmail

            if (user.email) {

                findUserEmail = await User.findOne({ email: user.email });

            }

            if (findUserEmail) {

                res.status(403).json("User email should be unique");

            } else {

                await User.collection.getIndexes();
                await User.collection.dropIndexes();
                const salt = await bcrypt.genSalt(10);
                const saltPassword = await bcrypt.hash(userPassword, salt);
                user.password = saltPassword;
                const saveduser = await user.save();

                const updatedUser = await User.findById(saveduser._id);

                const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
                const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
                res.status(200).json({ ...rest, token });
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

            const user = await User.findOne({ email });

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