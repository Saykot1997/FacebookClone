const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//Register

router.post("/register", async (req, res) => {

    const { email, password, name } = req.body;

    if (email && password && name) {

        const user = new User({
            email,
            name
        })

        try {

            const salt = await bcrypt.genSalt(10);
            const saltPassword = await bcrypt.hash(password, salt);
            user.password = saltPassword;
            const newUser = await user.save();
            res.status(200).json(newUser);

        } catch (error) {

            res.status(400).json(error);
            // console.log(error);
        }

    } else {

        res.status(400).json("Please fill all the fields");
    }

});


// Login route

router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    if (email && password) {

        try {

            const user = await User.findOne({ email });

            if (!user) {

                res.status(400).json("User not found");

            } else {

                const isMatch = await bcrypt.compare(password, user.password);

                if (!isMatch) {

                    res.status(400).json("Incorrect password");

                } else {

                    const token = jwt.sign({ id: user._id, role: user.role }, process.env.TOKENSECRATE);

                    const { password, ...rest } = user._doc;

                    res.status(200).cookie("jwt", token, { httpOnly: true }).json(rest);

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