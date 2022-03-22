// import UserController from './UserController'
import { Router, Request, Response } from 'express'
import ProductController from './ProductController'
const productController = new ProductController()

export default (router: Router) => {
        router.route('/products')
                .get(async (req: Request, res: Response) => {
			const products = await productController.getProducts()
			res.json(products)
                })
                
		.post(async (req: Request, res: Response) => {
                        res.json({
                                message: 'Hello World',
                        })
                })

        router.route('/products/:id')
                .get(async (req: Request, res: Response) => {
			const product = await productController.getProductById(String(req.params.id))
			if (product) res.json(product)
			else res.status(404).json({ message: 'Product not found' })
                })

                .put(async (req: Request, res: Response) => {
                        res.json({
                                message: 'Hello World',
                        })
                })
        
		.delete(async (req: Request, res: Response) => {
                        res.json({
                                message: 'Hello World',
                        })
                })
}
