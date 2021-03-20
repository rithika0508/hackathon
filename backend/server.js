const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

require('./src/db/mongodb.js')
const PORT = 8000

//const Investors = require('./src/models/investor.js')
const Investor_routes = require('./src/routes/investor.js')
const startup_routes = require('./src/routes/startup.js')
const SI_routes = require('./src/routes/SI.js')

app.use(express.json())
app.use(Investor_routes)
app.use(startup_routes)
app.use(SI_routes)


// const myFunc = () => {
//     const obj = {
//         name: 'MYNAME',
//         email: 'myname@example.com'
//     }
//     const token = jwt.sign(JSON.stringify(obj), 'thisismysecretkey')
//     const toke = jwt.verify(token, 'thisismysecretkey')
//     console.log(token)
//     console.log(toke)
// }
// myFunc()

app.listen(PORT, () => {
    console.log('server is on port ' + PORT)
})