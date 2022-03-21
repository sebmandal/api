// import UserController from './UserController'
import { Router, Request, Response } from 'express'
import User from '../../models/User'

export default (router: Router) => {
        router.route('/users')
                .get(async (req: Request, res: Response) => {
                        res.json({
                                message: 'Hello World',
                        })
                })
                .post(async (req: Request, res: Response) => {
                        res.json({
                                message: 'Hello World',
                        })
                })

        router.route('/users/:id')
                .get(async (req: Request, res: Response) => {
                        res.json({
                                message: 'Hello World',
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
