const express = require('express')
const app = express()
const port = 3000

app.get('/status', (req, res) => {
  res.send('The server is alive!')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
