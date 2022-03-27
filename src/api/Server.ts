import express, { Express } from 'express'
import Router from './router'
import middleware from './middleware'

export default class Server {
        public app: Express

        constructor() {
                // initializing the instance
                this.app = express()

                // setting up body-parser
                this.app.use(express.json())
                this.app.use(express.urlencoded({ extended: true }))

                // setting up the router and middleware
                this.app.use('/api/v1', new Router().init())
                this.app.use(middleware)
        }

        public start(port: number) {
                this.app.listen(port)
        }
}
