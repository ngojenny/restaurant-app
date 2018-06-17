const express = require('express')
const app = express()
const PORT = 8080

app.get('/healthcheck', (req, res) => {
  res.status(200).json({ message: 'ok' })
})

app.post('/login/:name/:email', (req, res) => {
  const { name, email } = req.params
  res.status(200).json({ name: name, email: email })
})
// callback function will fire when its attached to the port successfully
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

//webpack dev server, look into this
