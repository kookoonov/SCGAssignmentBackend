const express = require('express')
const app = express()
const port = 3001

var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/p', function (req, res, next) {
  res.json({ msg: 'This is CORS-enabled for all origins!' })
})

app.get('/nearby', function (req, res, next) {
  const axios = require('axios')
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=13.7699094, 100.58647930000006&radius=1000&type=restaurant&keyword=&key=AIzaSyBcqAN0A9zmWYC-tGYn8ggt2G9Nwx-cC-g`
  const result = axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((result) => {
    res.json({ data: result.data })
  });
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))