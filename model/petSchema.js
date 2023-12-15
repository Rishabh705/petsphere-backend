const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true,
    },
    organization_id: {
        type: String,
    },
    url: {
        type: String,
    },
    type: {
        type: String,
    },
    species: {
        type: String,
    },

    breeds: {
        primary: {
            type: String,
            },
        secondary: {
            type: String,
            },
        mixed: {
            type: Boolean,
            },
        unknown: {
            type: Boolean,
            },
    },
    colors: {
        primary: {
            type: String,
            },
        secondary: {
            type: String,
            },
        tertiary: {
            type: String,
            }
    },
    age: {
        type: String,
    },

    gender: {
        type: String,
    },
    size: {
        type: String,
    },
    coat: {
        type: String,
    },
    attributes: {
        spayed_neutered: {
            type: Boolean,
            },
        house_trained: {
            type: Boolean,
            },
        declawed: {
            type: String,
            },
        special_needs: {
            type: Boolean,
            },
        shots_current: {
            type: Boolean,
            }
    },
    environment: {
        children: {
            type: Boolean,
            },
        dogs: {
            type: Boolean,
            },
        cats: {
            type: Boolean,
            }
    },
    tags: {
        type: Array,
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    organization_animal_id: {
        type: String,
    },
    photos: {
        type: Array,
    },
    primary_photo_cropped: {
        small: {
            type: String,
            },
        medium: {
            type: String,
            },
        large: {
            type: String,
            },
        full: {
            type: String,
            }
    },
    videos: {
        type: Array,
    },
    status: {
        type: String,
    },
    status_changed_at: {
        type: String,
    },
    published_at: {
        type: String,
    },
    distance: {
        type: String,
    },
    contact: {
        email: {
            type: String,
            },
        phone: {
            type: String,
            },
        address: {
            address1: {
                type: String,
                    },
            address2: {
                type: String,
                    },
            city: {
                type: String,
                    },
            state: {
                type: String,
                    },
            postcode: {
                type: String,
                    },
            country: {
                type: String,
                    }
        }
    },
    _links: {
        self: {
            href: {
                type: String,
                    },
        },
        type: {
            href: {
                type: String,
                    },
        },
        organization: {
            href: {
                type: String,
                    },
        },
    }

});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;