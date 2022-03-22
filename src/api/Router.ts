import express, { Request, Response } from 'express'
import endpoints from './endpoints'

export default class Router {
        private router: express.Router
        private endpoints: ((router: express.Router) => void)[]

        constructor() {
                this.router = express.Router()
                this.endpoints = endpoints
        }

        public init(): express.Router {
                this.endpoints.forEach((endpoint) => endpoint(this.router))
                return this.router
        }
}
