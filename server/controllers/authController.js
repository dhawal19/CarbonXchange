require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');


const handleSignup = async (req, res) => {
    
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
        return res.status(400).json({ error: 'User already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

const handleLogin = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        const accessToken = jwt.sign(
            {user: {id: user.id}},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn: '1d', algorithm: 'HS256'}
        );
        const refreshToken = jwt.sign(
            {user: {id: user.id}},
            process.env.REFRESH_TOKEN_SECRET,
            {expiresIn: '1d'}
        );
        user.refreshToken = refreshToken;
        await user.save();
        
        res.cookie('jwt', refreshToken, {maxAge: 24*60*60*1000,httpOnly: true, secure: true, sameSite: 'none'});
        res.status(200).json({ accessToken });
    }
    catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
}

const handleLogout = async (req, res) => {
    const cookie = req.cookies;
    const refreshToken = cookie.jwt;
    if(!cookie?.jwt){
        return res.status(401).json({error: "Unauthorized"});
    }
    const foundUser = await User.findOne({refreshToken});
    if(!foundUser){
        return res.status(401).json({error: "user not found"});
    }

    foundUser.refreshToken = "";
    await foundUser.save();
    res.clearCookie('jwt', {path: '/', sameSite: 'none', httpOnly: true, secure: true});
    res.status(200).json({message: "Logged out successfully"});
}

module.exports = { handleSignup, handleLogin, handleLogout };

