import express, { Request, Response } from 'express'
import { Endpoint } from './types/Endpoint'

const endpoints: Endpoint[] = [
	{
		method: 'get',
		path: '/api/v1.0.0/test',
		handler: (req: Request, res: Response) => {
			res.json({
				message: 'Hello World!',
			})
		},
	},
]

export default class Router {
	private router: express.Router = express.Router()
	private endpoints: Endpoint[]

	constructor() {
		this.endpoints = endpoints

		this.endpoints.forEach((endpoint: Endpoint) => {
			this.router[endpoint.method!](endpoint.path, endpoint.handler)
		})
	}

	public get() {
		return this.router
	}
}
