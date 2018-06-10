const express = require('express')
const app = express()
const PORT = 8080

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'success' })
})

// callback function will fire when its attached to the port successfully
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

//webpack dev server, look into this
