const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const investorSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
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
        required: true,
        trim: true
    },
    location: {
        type: String,
        trim: true     
    },
    portfolio: {
        type: String,
        trim: true
    },
    budget: {
        type: String,
        trim: true,
        required: true
    },
    SI: {
        type: String,
        default:'investor'
    }
    // tokens: [{
    //     token: {
    //         type : String,
    //         require: true
    //     }
    // }]
})

// investorSchema.methods.createToken = async function() {
    
//     const investor = this
//     const token = jwt.sign({ _id: investor._id.toString()}, '12345678910')

//     investor.tokens = investor.tokens.concat({ token : token})
//     await investor.save()
//     return token
// }
investorSchema.methods.toJSON = function() {
    const investor = this
    const investor_json = investor.toObject()
    delete investor_json.password
    return investor_json
}

investorSchema.pre('save', async function (next) {
    const investor = this
    console.log('2')
    if(investor.isModified('password')) {
        console.log('3')
        console.log(investor.password)
        investor.password = await bcrypt.hash(investor.password, 8)
        console.log(investor.password)
    }
    next()
})



const investor = mongoose.model('Investors', investorSchema)

module.exports = investor