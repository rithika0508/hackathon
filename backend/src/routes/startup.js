const express = require('express')

const app = express()
const router = new express.Router()

const Startup = require('../models/startup.js')
app.use(express.json())
//startup signup
router.post('/sts', async (req, res) => {
    try {
        const startup = new Startup(req.body)
        // const token = await startup.createToken()
        // console.log(token)
        // res.send({startup ,token}
        await startup.save()
        res.send(startup)
    } catch (error) {
        res.status(400).send(error)
    }
})

//reading single startup user
router.get('/startUp/details/:email', async (req, res) => {
    try {
        const client = await Startup.findOne({ email:req.params.email })
        await client.save()
        res.status(200).send(client)
    } catch (error) {
        res.status(500).send()
    }
})

//reading all startup users
router.get('/startup/all', async (req, res) => {
    try {
        const users = await Startup.find({})
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send()
    }
})

module.exports = router