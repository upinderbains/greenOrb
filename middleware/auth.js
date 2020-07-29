const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.JWT_SECRET


module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');
    if(!token) {
        return res.status(400).json({msg: 'No Token, acess denied'});
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded.user;
        next();
    } catch (error) {
        next(error)
    }
}