const express = require('express')

const app = express()
const router = new express.Router()

const Investors = require('../models/investor.js')
const auth = require('../login/loginverify.js')

app.use(express.json())



//investor signup
router.post('/ins', async (req, res) => {
    try {
        console.log(req.body)
        const investors = new Investors(req.body)
        console.log('Testing 123')
        investors.save()
        // const token = await investors.createToken()
        // console.log(investor)
        // res.send({investors, token})
        res.send(investors)
    } catch (error) {
        res.status(400).send(error)
    }
})

//getting individual
router.get('investors/details/:email',async (req, res) => {
    try {
        const investor = await Investors.findOne({ email: req.params.email })
        res.send(investor)
    } catch (error) {
        res.status(500).send()
    }
})

//getting individual
// router.get('/investors', auth,async (req, res) => {
//     try {
//         const investor = await Investors.findOne({ email: req.params.email })
//         res.send(investor)
//     } catch (error) {
//         res.status(500).send()
//     }
// })

//getting all investors data
router.get('/investors/all', async (req, res) => {
    try {
        const investor = await Investors.find({})
        res.send(investor)
    } catch (error) {
        res.status(500).send()
    }
    
})


module.exports = router