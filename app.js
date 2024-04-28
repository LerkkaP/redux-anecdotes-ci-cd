const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'dist')))

const jsonServer = require('json-server')
app.use('/api', jsonServer.router('db.json'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`)
})
