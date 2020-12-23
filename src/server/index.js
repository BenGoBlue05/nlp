const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(express.static('dist'))

console.log(__dirname)
const apiKey = process.env.API_KEY
console.log(`Your API key is ${apiKey}`)

const port = 3000
app.listen(port, () => console.log(`listening on port ${port}`))

app.get('/', (_, res) => {
    res.sendFile('dist/index.html')
})

app.get('/api/key', (_, res) => res.send({key: apiKey}))