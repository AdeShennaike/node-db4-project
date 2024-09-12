const express = require('express')
const  Recipes = require('./recipe-model')

const server = express()
server.use(express.json())

module.exports = server;