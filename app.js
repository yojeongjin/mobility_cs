const express = require('express');
const bodyParser = require('body-parser')
const app = express();

const path = require('path')
const cors = require('cors');

const port = 88;

// git

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './mobility_cs/build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './mobility_cs/build/index.html'));
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
