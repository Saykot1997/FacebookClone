
const jwt = require("jsonwebtoken");

const Authgurd = async (req, res, next) => {

    const token = req.cookies.jwt;

    try {
        const isvarified = await jwt.verify(token, process.env.TOKENSECRATE);

        if (isvarified) {
            req.userId = isvarified.id
            req.userRole = isvarified.role
            next()

        } else {

            res.status(400).json('token is not varified')
        }
    }
    catch (error) {

        res.status(500).json('you need to login first !!')
    }

}


module.exports = Authgurd