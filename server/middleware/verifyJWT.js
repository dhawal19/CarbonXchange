require('dotenv').config();
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader?.startsWith('Bearer')) {
        return res.sendStatus(401);
    }

    const token = authHeader.split(' ')[1];
    if (!token || token === undefined) res.status(403);
    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) {
                res.status(403);
                next(err); //invalid token 
            }
            req.email = decoded.email;
            next();
        }
    )
}

module.exports = verifyJWT;