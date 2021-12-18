const { version, author } = require('./package.json')
const binary = require('./lib/binary')
const iplookup = require('./lib/iplook')
const artinama = require('./lib/artinama')
const stress = require('./lib/stress')
const cuaca = require('./lib/cuaca')
const youtube = require("./lib/youtube")
const fakeua = require("./lib/fakeua")

module.exports = { version, author: author.name, binary, iplookup, artinama, stress, cuaca, downloader: { youtube }, fakeua }
