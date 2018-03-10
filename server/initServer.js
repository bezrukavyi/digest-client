const express = require('express')
const cookieParser = require('cookie-parser')

const serverInit = () => {
  const server = express()

  server.use(cookieParser())

  return server
}

module.exports = serverInit
