// import UserController from './UserController'
import { Router, Request, Response } from 'express'
import Product from '../../models/Product'
import ProductController from './controller'
const productController = new ProductController()

export default (router: Router) => {
        router.route('/products')
                .get(async (req: Request, res: Response) => {
                        const products: Product[] =
                                await productController.getProducts()
                        res.json(products)
                })

                .post(async (req: Request, res: Response) => {
                        const product: Product | undefined =
                                await productController.createProduct(req.body)
                        if (product) res.json(product)
                        else
                                res.status(400).json({
                                        message: 'Missing fields, please check your request',
                                })
                })

        router.route('/products/test').get(
                async (req: Request, res: Response) => {
                        await productController.clearProducts()
                        return res.json({ message: 'Products cleared' })
                }
        )

        router.route('/products/:id')
                .get(async (req: Request, res: Response) => {
                        const product: Product | undefined =
                                await productController.getProductById(
                                        String(req.params.id)
                                )
                        if (product) res.json(product)
                        else
                                res.status(404).json({
                                        message: 'Product not found',
                                })
                })

                .put(async (req: Request, res: Response) => {
                        const product: Product | undefined =
                                await productController.updateProduct(
                                        String(req.params.id),
                                        req.body
                                )
                        if (product) res.json(product)
                        else
                                res.status(404).json({
                                        message: 'Product not found',
                                })
                })

                .delete(async (req: Request, res: Response) => {
                        const product: Product | undefined =
                                await productController.deleteProduct(
                                        String(req.params.id)
                                )

                        if (product) res.json(product)
                        else
                                res.status(404).json({
                                        message: 'Product not found',
                                })
                })
}
