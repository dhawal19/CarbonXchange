const allowedOrigins = require("../config/allowedOrigins")

// this middleware sets the Access-Control-Allow-Credentials header which is necessary for the client to send cookies and authentication headers
const credentials = (req, res, next) =>{
    const origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) !== -1){
        res.header('Access-Control-Allow-Credentials', true); 
        res.header('Access-Control-Allow-Origin', origin); // set the origin header to the request origin
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // set the allowed methods
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With', 'Origin', 'Accept'); // set the allowed headers
    };
    next();
};


module.exports = credentials;