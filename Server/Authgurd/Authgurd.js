
const jwt = require("jsonwebtoken");

const Authgurd = async (req, res, next) => {

    if (req.headers.authorization) {
        const token = req.headers.authorization.replace("Bearer ", "");
        // const token = req.header("Authorization").split(" ")[1];
        try {
            const isvarified = await jwt.verify(token, process.env.TOKENSECRATE);

            if (isvarified) {
                req.userId = isvarified.id
                req.userRole = isvarified.role
                req.userName = isvarified.userName
                next();

            } else {

                res.status(400).json('token is not varified')
            }
        }
        catch (error) {

            res.status(500).json('you need to login first !!')
        }

    } else {
        res.status(401).json("You are not authorized login first")
    }



}


module.exports = Authgurd