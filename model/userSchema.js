const mongoose = require('mongoose');
const Pet = require('./petSchema');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    favoritePets: [Pet.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
