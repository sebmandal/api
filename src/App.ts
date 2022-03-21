/* Importing modules */
import Server from './api/Server'
require('dotenv').config()

class App {
        private server: Server
        private config: any

        constructor() {
                this.server = new Server()

                this.config = {
                        port: process.env.PORT || 3000,
                }
        }

        public init() {
                this.server = new Server()
                this.server.start(3000)
                console.log(`Server running on port ${this.config.port}`)
        }
}

new App().init()
