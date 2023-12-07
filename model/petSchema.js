const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true,
    },
    organization_id: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true,
    },

    breeds: {
        primary: {
            type: String,
            required: true,
        },
        secondary: {
            type: String,
            required: true,
        },
        mixed: {
            type: Boolean,
            required: true,
        },
        unknown: {
            type: Boolean,
            required: true,
        },
    },
    colors: {
        primary: {
            type: String,
            required: true,
        },
        secondary: {
            type: String,
            required: true,
        },
        tertiary: {
            type: String,
            required: true,
        }
    },
    age: {
        type: String,
        required: true,
    },

    gender: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    coat: {
        type: String,
        required: true,
    },
    attributes: {
        spayed_neutered: {
            type: Boolean,
            required: true,
        },
        house_trained: {
            type: Boolean,
            required: true,
        },
        declawed: {
            type: String,
            required: true,
        },
        special_needs: {
            type: Boolean,
            required: true,
        },
        shots_current: {
            type: Boolean,
            required: true,
        }
    },
    environment: {
        children: {
            type: Boolean,
            required: true,
        },
        dogs: {
            type: Boolean,
            required: true,
        },
        cats: {
            type: Boolean,
            required: true,
        }
    },
    tags: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    organization_animal_id: {
        type: String,
        required: true,
    },
    photos: {
        type: Array,
        required: true,
    },
    primary_photo_cropped: {
        small: {
            type: String,
            required: true,
        },
        medium: {
            type: String,
            required: true,
        },
        large: {
            type: String,
            required: true,
        },
        full: {
            type: String,
            required: true,
        }
    },
    videos: {
        type: Array,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    status_changed_at: {
        type: String,
        required: true,
    },
    published_at: {
        type: String,
        required: true,
    },
    distance: {
        type: String,
        required: true,
    },
    contact: {
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        address: {
            address1: {
                type: String,
                required: true,
            },
            address2: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            postcode: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            }
        }
    },
    _links: {
        self: {
            href: {
                type: String,
                required: true,
            },
        },
        type: {
            href: {
                type: String,
                required: true,
            },
        },
        organization: {
            href: {
                type: String,
                required: true,
            },
        },
    }

});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;