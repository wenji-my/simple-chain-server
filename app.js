const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var Block = require('./simpleChain').Block
var Blockchain = require('./simpleChain').Blockchain

let myBlockChain = new Blockchain();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/block/:id', async (req, res) => {
  let block = await myBlockChain.getBlock(req.params.id)
  res.send(JSON.stringify(block))
})

app.post('/block', async (req, res) => {
  await myBlockChain.addBlock(new Block(req.body.body))
  res.send(myBlockChain.chain[myBlockChain.chain.length - 1])
})

app.listen(8000, () => console.log('listening port 8000'))
