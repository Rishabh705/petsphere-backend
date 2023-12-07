const Pet = require('../model/petSchema');

const getAllPets = async (req, res) => {
    let page = Number(req.query.page) || 1;
    const limit = 20;
    let skip = (page - 1) * limit;

    // Extract filters from the request query
    const typeFilter = req.query.type;
    const ageFilter = req.query.age;
    const breedFilter = req.query.breed;
    const genderFilter = req.query.gender;

   // Construct the filter object based on provided filters
    const filter = {};
    if (typeFilter && typeFilter !== 'clear') filter.type = typeFilter;
    if (ageFilter && ageFilter !== 'clear') filter.age = ageFilter;
    if (breedFilter && breedFilter !== 'clear') filter['breeds.primary'] = breedFilter;
    if (genderFilter && genderFilter !== 'clear') filter.gender = genderFilter;

    try {
        const pets = await Pet.find(filter).skip(skip).limit(limit);
        
        if (!pets || pets.length === 0) {
            return res.status(204).json({ 'message': 'No pets found' });
        }
        
        res.json(pets);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
};
const getPet = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({ "message": 'ID is required' })
    
    try {
        //get the pet with that id
        const pet = await Pet.findOne({ _id: req.params.id }).exec()
        
        //check if that pet is alive!!!
        if (!pet) {
            return res.status(204).json({ "message": `No pet found with id ${req.params.id} ` })
        }
        
        res.json(pet);
        
    } catch (error) {
        console.error(error);
    }
}

const getBreedsByType = async (req, res) => {
    const typeFilter = req.query.type;
    
    try {
        const breeds = await Pet.distinct('breeds.primary', { type: typeFilter });
        res.json(breeds);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 'message': 'Internal Server Error' });
    }
}

module.exports = {
    getAllPets,
    getBreedsByType,
    getPet,
}