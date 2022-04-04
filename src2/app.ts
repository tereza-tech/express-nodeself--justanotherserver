import express from 'express'

const app = express()

/*initialize({
  app,
  apiDoc: require("./api/api-doc"),
  paths: "./api/paths",
});
*/

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.post('/post', (req, res) => {
  res.send('Got a POST request')
})


app.put('/', (req, res) => {
  res.send('Got a PUT request at /')
})


app.delete('/', (req, res) => {
  res.send('Got a DELETE request at /')
})


const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See Swagger: `),
)