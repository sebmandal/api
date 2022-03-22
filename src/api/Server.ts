import express, { Express } from 'express'
import Router from './router'
import middleware from './middleware'

export default class Server {
        public app: Express

        constructor() {
                this.app = express()
        }

        public start(port: number) {
                this.app.use('/api/v1', new Router().init())
		this.app.use(middleware)
                this.app.listen(port)
        }
}
