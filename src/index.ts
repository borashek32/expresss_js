import express from 'express'
import bodyParser from "body-parser"
import {productsRouter} from "./routes/products-router"
import {addressesRouter} from "./routes/addresses-router"

const app = express()
const port = process.env.PORT || 3000


app.use(bodyParser.json({ type: "application/json" }))
app.use(bodyParser.raw({ type: 'application/octet-stream' }))

// app.get('/products', (req: Request, res: Response) => {
//   // @ts-ignore
//   req.blabla = "hello"
//   next()
// }, (req: Request, res: Response) => {
//   // @ts-ignore
//   const blabla = req.blabla
//   res.send({value: blabla + "!!!"})
// })


app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})