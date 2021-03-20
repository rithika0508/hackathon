const express = require('express')
const app = express()
const router = new express.Router()
const bcrypt = require('bcryptjs')
// const jwt = require('jwt')

const Investors = require('../models/investor.js')
const Startup = require('../models/startup.js')

app.use(express.json())
//login for investors and startup
router.get('/login/verify', async (req, res) => {

    try {
        if (req.query.email) {
            // const inv_client = await Investors.findOne({ email: req.query.email })
            // const start_client = await Startup.findOne({ email: req.query.email })
            const inv = await Investors.findOne({ email: req.query.email })
            const start = await Startup.findOne({ email: req.query.email })

            if (inv) {

                const compare = await bcrypt.compare(req.query.password, inv.password)

                if (compare) {
                    // const token = await inv.createToken()
                    // return res.status(200).send({ inv, token })
                    res.status(200).send(inv)
                }
                else if(!compare){
                    res.send({
                        message: 'Invalid credentials'
                    })
                }
            }
            else if (start) {
                const compare1 = await bcrypt.compare(req.query.password, start.password)
                // const token = await start.createToken()
                if (compare1) {
                    // return res.status(200).send({ start, token})
                    res.status(200).send(start)
                }
                else if(!compare1){
                    res.send({
                        message: 'Invalid credentials'
                    })
                }
            } 
            else {
                throw new Error()
            }
        }

        else if (req.query.username) {
            const inv2 = await Investors.findOne({ username: req.query.username })
            const start2 = await Startup.findOne({ username: req.query.username })

            if (inv2) {
                console.log('entered inv2')
                const compare2 = await bcrypt.compare(req.query.password, inv2.password)

                if (compare2) {
                    console.log('entered compare2')
                    // const token = await inv2.createToken()
                    // res.status(200).send({inv2, token})
                    return res.status(200).send(inv2)
                }
                else {
                    res.status(400).send({
                        message: 'Invalid credentials'
                    })
                }
            }
            else if (start2) {

                const compare3 = await bcrypt.compare(req.query.password, start2.password)
                if (compare3) {
                    // const token = await start2.createToken()
                    // res.status(200).send({ start2, token})
                    res.status(200).send(start2)
                }
                else if(!compare3){
                    res.send({
                        message: 'Invalid Credentials'
                    })
                }
            }
            else {
                throw new Error()
            }
        }

    } catch (error) {
        res.send({
            message: 'Invalid credentials'
        })
    }
})

module.exports = router