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
  if (block) {
    res.send(JSON.stringify(block))
  } else {
    res.send("Block don't exist!")
  }
})

app.post('/block', async (req, res) => {
  if (req.body.body) {
    await myBlockChain.addBlock(new Block(req.body.body))
    res.send(myBlockChain.chain[myBlockChain.chain.length - 1])
  } else {
    res.send("No body in the request parameters!")
  }
})

app.listen(8000, () => console.log('listening port 8000'))
