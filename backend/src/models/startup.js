const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const startupSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowerase: true,
        unique: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    bio: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    idea: {
        type: String,
        trim: true,
        required: true
    },
    domain: {
        type: String,
        trim: true,
        required: true
    },
    SI : {
        type: String,
        default: 'startup'
    }
    // tokens:[{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
})

// startupSchema.methods.createToken = async function() {
//     const client = this
//     const token = jwt.sign({ _id: client._id.toString() }, '123456789')
//     client.tokens = client.tokens.concat( { token } )
//     return token
// }

startupSchema.methods.toJSON = function () {
    const client = this
    const client_obj = client.toObject()
    delete client_obj.password
    return client_obj
}

startupSchema.pre('save', async function(next) {
    const startUp = this
    startUp.password = await bcrypt.hash(startUp.password, 8)
    next()
})

const Startup = mongoose.model('startUp', startupSchema)

module.exports = Startup