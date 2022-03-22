// import UserController from './UserController'
import { Router, Request, Response } from 'express'
import Product from '../../models/Product'
import ProductController from './ProductController'
const productController = new ProductController()

export default (router: Router) => {
        router.route('/products')
                .get(async (req: Request, res: Response) => {
                        res.json(productController.getAllProducts())
                })
                .post(async (req: Request, res: Response) => {
                        res.json({
                                message: 'Hello World',
                        })
                })

        router.route('/products/:id')
                .get(async (req: Request, res: Response) => {
                        res.json({
                                message: `${req.params.id}`,
                        })
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
