const router = require('express').Router();
const User = require("../Models/User-model");
const bcrypt = require('bcrypt');
const Authgurd = require("../Authgurd/Authgurd");

// update user

router.put('/:id', Authgurd, async (req, res) => {

    const { id } = req.params;

    if (req.userId != id) {

        res.status(401).json({
            message: "Unauthorized"
        })

    } else {

        try {

            if (req.body.password) {

                req.body.password = await bcrypt.hash(req.body.password, 10);
            }

            const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
            res.json(updateUser);

        } catch (error) {

            res.status(400).json(error);
            console.log(error);
        }
    }
});


// user delete 

router.delete('/:id', Authgurd, async (req, res) => {

    const { id } = req.params;

    if (req.userId != id) {

        res.status(401).json({
            message: "Unauthorized"
        })

    } else {

        try {

            await User.findByIdAndDelete(id);
            res.status(200).json("User deleted");

        } catch (error) {

            res.status(400).json(error);
            console.log(error);
        }
    }

});


// get user by id

router.get('/:id', async (req, res) => {

    const { id } = req.params;

    try {

        const getUser = await User.findById(id);
        const { password, ...others } = getUser._doc;
        res.status(200).json(others);

    } catch (error) {

        res.status(400).json(error);
        console.log(error);
    }

});


// flow a user

router.put("/flow/:id", Authgurd, async (req, res) => {

    const { id } = req.params;

    if (req.userId == id) {

        res.status(400).json("You can't flow yourself");

    } else {

        try {

            const user = await User.findById(id);
            const currentUser = await User.findById(req.userId);

            if (user.flowers.includes(req.userId)) {

                res.status(400).json("User already flowing");

            } else {

                user.flowers.push(req.userId);
                await user.save();

                currentUser.flowings.push(id);
                await currentUser.save();

                res.status(200).json("User is flowings");

            }

        } catch (error) {

            res.status(400).json(error);
            console.log(error);
        }

    }

})



module.exports = router;