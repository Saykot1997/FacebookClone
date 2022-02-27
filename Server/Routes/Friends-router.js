const router = require('express').Router();
const User = require("../Models/User-model");
const Authgurd = require("../Authgurd/Authgurd");
const jwt = require('jsonwebtoken');

// friend suggestion

router.get("/friendSuggestion", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);

        const allUsers = await User.find({ _id: { $ne: req.userId } }).select('-password');
        const friends = user.friends;
        const friendRequests = user.sendFriendRequests;
        const recievedFriendRequests = user.recievedFriendRequests;
        const friendSuggestion = [];

        allUsers.forEach(user => {

            if (!friends.includes(user._id) && !friendRequests.includes(user._id) && !recievedFriendRequests.includes(user._id)) {
                friendSuggestion.push(user);
            }
        });

        res.status(200).json(friendSuggestion);

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});


// get single friend

router.get("/getSingleFriend/:id", Authgurd, async (req, res) => {

    const id = req.params.id;

    try {

        const friend = await User.findById(id).select('-password -recievedFriendRequests -sendFriendRequests -flowers -flowings  -notifications -role');
        res.status(200).json(friend);

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
})

// get all friends

router.get("/getAllFriends", Authgurd, async (req, res) => {

    try {

        const friends = await User.findById(req.userId).select('friends');

        let AllFriends = [];

        await Promise.all(friends.friends.map(async friend => {

            const user = await User.findById(friend).select('profilePicture firstName sureName friends work');
            AllFriends.push(user);
        }))

        res.status(200).json(AllFriends);

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});

// getAllFriendsOfFriend

router.get("/getAllFriendsOfFriend/:id", Authgurd, async (req, res) => {

    const id = req.params.id;

    try {

        const friends = await User.findById(id).select('friends');

        let AllFriends = [];

        await Promise.all(friends.friends.map(async friend => {

            const user = await User.findById(friend).select('profilePicture firstName sureName friends work');
            AllFriends.push(user);
        }))

        res.status(200).json(AllFriends);

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
})


// friend request

router.post("/friendRequest", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        const friendId = req.body.friendId;

        const friend = await User.findById(friendId);

        if (friend) {

            if (user.sendFriendRequests.includes(friendId)) {

                res.status(200).json({
                    message: "You have already sent friend request to this user"
                });

            } else if (friend.recievedFriendRequests.includes(user._id.toString())) {

                res.status(200).json({
                    message: "You have already sent friend request to this user"
                });

            }
            else {

                user.sendFriendRequests.push(friendId);
                user.flowings.push(friendId);
                friend.recievedFriendRequests.push(user._id);
                friend.flowers.push(user._id);
                friend.notifications.push({ massage: `${user.firstName} send you friend request`, date: Date.now(), isRead: false, sendId: user._id });
                user.save();
                friend.save();

                const updatedUser = await User.findById(req.userId);
                const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
                const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
                res.status(200).json({ ...rest, token });
            }

        } else {

            res.status(400).json({
                message: "User not found"
            });
        }

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});

// get friend requests

router.get("/getFriendRequests", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);

        const friendRequests = [];

        await Promise.all(user.recievedFriendRequests.map(async friendId => {

            const friend = await User.findById(friendId);

            if (friend) {

                friendRequests.push(friend);
            }
        }));

        res.status(200).json(friendRequests);

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});


// acceptFriendRequest

router.post("/acceptFriendRequest", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        const friendId = req.body.friendId;

        const friend = await User.findById(friendId);

        if (friend) {

            if (user.recievedFriendRequests.includes(friendId)) {

                user.friends.push(friendId);
                friend.friends.push(user._id);
                user.recievedFriendRequests.pull(friendId);
                friend.sendFriendRequests.pull(user._id);


                user.notifications.forEach((notification, index) => {

                    let notificationMessage = notification.massage;
                    let isPresent = notificationMessage.search(friend.firstName + " send you friend request");

                    if (isPresent > -1) {
                        user.notifications.splice(index, 1);
                    }
                })


                friend.notifications.push({ massage: `${user.firstName} accept your friend request`, date: Date.now(), isRead: false, sendId: user._id });
                await user.save();
                await friend.save();

                const updatedUser = await User.findById(req.userId);
                const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
                const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
                res.status(200).json({ ...rest, token });

            } else {

                res.status(400).json({
                    message: "You have not recieved friend request from this user"
                });
            }

        } else {

            res.status(400).json({
                message: "User not found"
            });
        }

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});

// removeFriendRequest

router.delete("/removeFriendRequest/:friendId", Authgurd, async (req, res) => {

    const friendId = req.params.friendId;
    const userId = req.userId;

    try {

        const user = await User.findById(userId);
        const friend = await User.findById(friendId);

        user.recievedFriendRequests.pull(friendId);
        friend.sendFriendRequests.pull(userId);

        user.notifications.forEach((notification, index) => {

            let notificationMessage = notification.massage;
            let isPresent = notificationMessage.search(friend.firstName + " send you friend request");

            if (isPresent > -1) {
                user.notifications.splice(index, 1);
            }
        });

        await user.save();
        await friend.save();

        const updatedUser = await User.findById(req.userId);
        const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
        const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
        res.status(200).json({ ...rest, token });

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
})


// mutual friends

router.get("/getMutalFriends/:friendId", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        const friendId = req.params.friendId;

        const friend = await User.findById(friendId);

        if (friend) {

            const mutualFriends = [];

            user.friends.forEach(friendId => {

                if (friend.friends.includes(friendId)) {

                    mutualFriends.push(friendId);
                }
            });

            let SendAbleMutualFriends = []

            await Promise.all(mutualFriends.map(async friendId => {

                const friend = await User.findById(friendId).select('profilePicture firstName sureName');
                SendAbleMutualFriends.push(friend)
            }));

            res.status(200).json(SendAbleMutualFriends);

        } else {

            res.status(400).json({
                message: "User not found"
            });
        }

    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
});


// Remove friend

router.delete("/removeFriend/:friendId", Authgurd, async (req, res) => {

    try {

        const user = await User.findById(req.userId);
        const friendId = req.params.friendId;

        const friend = await User.findById(friendId);

        if (friend) {

            if (user.friends.includes(friendId)) {

                user.friends.pull(friendId);
                user.flowers.pull(friendId);
                user.flowings.pull(friendId);
                friend.friends.pull(user._id);
                friend.flowers.pull(user._id);
                friend.flowings.pull(user._id);


                user.notifications.forEach((notification, index) => {

                    let notificationMessage = notification.massage;
                    let isPresent = notificationMessage.search(friend.firstName + " send you friend request");

                    if (isPresent > -1) {
                        user.notifications.splice(index, 1);
                    }
                });

                friend.notifications.forEach((notification, index) => {

                    let notificationMessage = notification.massage;
                    let isPresent = notificationMessage.search(user.firstName + " send you friend request");

                    if (isPresent > -1) {
                        friend.notifications.splice(index, 1);
                    }
                });

                await user.save();
                await friend.save();

                const updatedUser = await User.findById(req.userId);
                const token = jwt.sign({ id: updatedUser._id, role: updatedUser.role, userName: updatedUser.firstName }, process.env.TOKENSECRATE);
                const { password, timelinePost, updatedAt, createdAt, ...rest } = updatedUser._doc;
                res.status(200).json({ ...rest, token });

            } else {

                res.status(400).json({
                    message: "You have not recieved friend request from this user"
                });
            }

        } else {

            res.status(400).json({
                message: "User not found"
            });
        }


    } catch (error) {

        console.log(error);
        res.status(400).json(error);
    }
})


module.exports = router;