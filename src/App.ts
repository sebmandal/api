/* Importing modules */
import open from 'open'
import Server from './api/Server'
require('dotenv').config()

class App {
        private server: Server
        private config: any

        constructor() {
                this.server = new Server()

                this.config = {
                        port: process.env.PORT || 3000,
                        env: process.env.NODE_ENV || 'development',
                }
        }

        public init() {
                this.server = new Server()
                this.server.start(3000)
                console.log(`Server running on port ${this.config.port}`)
                if (this.config.env === 'development')
                        open(`http://localhost:${this.config.port}`)
        }

        public getConfig() {
                return this.config
        }
}

new App().init()
