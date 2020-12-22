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

app.get('/', (_, res) => {
    res.sendFile('dist/index.html')
})

const port = 8080
app.listen(8080, () => console.log(`listening on port ${port}`))
