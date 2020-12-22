const path = require('path')
const express = require('express')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', (_, res) => {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const port = 8080
app.listen(8080, () => console.log(`listening on port ${port}`))
