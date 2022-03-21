import express, { Express } from 'express'
import Router from './router'

export default class Server {
        public app: Express
        private router: Router

        constructor() {
                this.app = express()
                this.router = new Router()
        }

        public start(port: number) {
                this.app.use('/api/v1.0.0', this.router.init())
                this.app.listen(port)
        }
}
