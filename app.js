const express = require('express')
const app = express()
const port = 3001

var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/xyz/:len', function (req, res, next) {
  const len = req.params.len;
  let result = [];
  let current = 3;
  result.push(current);

  for (let i = 1; i < len; i++) {
    current += i * 2
    result.push(current);
  }
  res.json({ data: result })
})

app.get('/nearby/:position', function (req, res, next) {
  const position = req.params.position;
  const axios = require('axios')
  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${position}&radius=1000&type=restaurant&keyword=&key=AIzaSyBmz2RLwsvdp0nhjBWUJ4abf27Nrn2ksCs`
  const result = axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }).then((result) => {
    res.json({ data: result.data })
  });
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))