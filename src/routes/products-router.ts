import {Request, Response, Router} from "express"
import {productsRepository} from "./../repositories/products.repository"


export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
  const foundProducts = productsRepository.getProductByTitle(req.query?.title.toString())
  res.send(foundProducts)
})
productsRouter.post('/', (req: Request, res: Response) => {
  const newProduct = productsRepository.createProduct(req.body.title)
  res.send(newProduct)
})
productsRouter.get('/:id', (req: Request, res: Response) => {
  const foundProduct = productsRepository.getProductById(+req.params.id)
  if (foundProduct) {
    res.send(foundProduct)
  } else {
    res.send(404)
  }
})
productsRouter.put('/:id', (req: Request, res: Response) => {
  const isUpdated = productsRepository.updateProductById(+req.params.id, req.body.title)
  if (isUpdated) {
    res.send(productsRepository.getProductById(+req.params.id))
  } else {
    res.send(404)
  }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
  const isDeleted = productsRepository.deleteProduct(+req.query.id)
  if (isDeleted) {
    res.send(204)
  } else {
    res.send(404)
  }
})