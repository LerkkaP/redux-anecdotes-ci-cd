const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'dist')))

// Handle API routes with json-server
const jsonServer = require('json-server')
app.use('/api', jsonServer.router('db.json'))

// Serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${port}`)
})
