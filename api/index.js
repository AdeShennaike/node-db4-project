const server = require('./server')

const PORT  = process.env.PORT || 9000

server.listen(PORT, () => {
    console.log(`\n**Server running on localhost:${PORT}**\n`)
})