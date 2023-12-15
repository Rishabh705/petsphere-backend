const User = require('../model/userSchema');
const Pet = require('../model/petSchema');

const addFavoritePet = async (req, res) => {
    const { user, pet } = req.body;
    try {
        // Check if user exists
        const founduser = await User.findOne({ username: user }).exec();
        if (!founduser) return res.status(404).json({ 'message': 'User not found' });

        // Check if pet exists
        const foundpet = await Pet.findById(pet).exec();
        if (!foundpet) return res.status(404).json({ 'message': 'Pet not found' });
        // Check if the foundpet is already in the user's favorites
        const alreadyFavorite = founduser.favoritePets.some(p => p._id === foundpet._id);
        if (alreadyFavorite) {
            // remove foundpet from favorites
            const newFavPets = founduser.favoritePets.filter((p) => p._id !== foundpet._id);
            founduser.favoritePets = newFavPets;
            await founduser.save();
            res.status(200).json({ 'message': 'Pet removed from favorites', favorites: founduser.favoritePets });
        }
        else {
            // Add foundpet to favorites
            founduser.favoritePets.push(foundpet);
            await founduser.save();
            res.status(200).json({ 'message': 'Pet added to favorites', favorites: founduser.favoritePets });
        }
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
};

const getFavoritePets = async (req, res) => {
    const { user } = req.query;
    try {
        // Check if user exists
        const founduser = await User.findOne({ username: user }).exec();
        if (!founduser) return res.status(404).json({ 'message': 'User not found' });

        res.status(200).json({ favorites: founduser.favoritePets });
    } catch (err) {
        res.status(500).json({ 'message': err.message });
    }
};

module.exports = {
    addFavoritePet,
    getFavoritePets,
};
