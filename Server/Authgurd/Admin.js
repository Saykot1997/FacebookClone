const Admin = (req, res, next) => {

    if (req.userRole == "admin") {
        next()
    } else {
        res.status(400).json("Only admin can make this request")
    }
}

module.exports = Admin