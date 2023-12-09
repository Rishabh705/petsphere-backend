const User = require('../model/userSchema');
const bcrypt = require('bcrypt')

const login = async (req, res) => {
    if (!req?.body?.username || !req?.body?.password) {
        return res.status(400).json({ 'message': 'All fields are required' });
    }
    
    try {
        const foundUser = await User.findOne({ username: req.body.username }).exec();
        
        if (!foundUser) return res.status(401).json({ 'message': 'No such user exists' })
        
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        
        if (match) {
            res.status(201).json({ 'message': 'Authenticated' });
        }
        else {
            res.status(400).json({ 'message': 'Invalid Credentials' });
        }
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

const register = async (req, res) => {
    if (!req?.body?.username || !req?.body?.password) {
        return res.status(400).json({ 'message': 'All fields are required' });
    }

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ username: req.body.username }).exec();
    if (duplicate) return res.status(409).json({ 'message': 'User already registered' });

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(req.body.password, 10);

        //create and store the new user
        const result = await User.create({
            "username": req.body.username,
            "password": hashedPwd
        });

        console.log(result);

        res.status(201).json({ 'success': `New user with ${req.body.username} created!` });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
}

module.exports = {
    login,
    register
}
