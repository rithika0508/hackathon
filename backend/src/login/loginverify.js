// const jwt = require('jsonwebtoken')

// const Investors = require('../models/investor.js')
// const Startup = require('../models/startup.js')

// const matching = async (req, res, next) => {

//     const token = await req.header('Authorization').replace('bearer ', '')
//     console.log(token)
//     if(req.body.email) {
//         const verify = jwt.verify(token, '')
//         const client = await Investors.findOne({ email: req.body.email ,'tokens.token' :token})

//     }
//     next()
// }

// module.exports = matching

