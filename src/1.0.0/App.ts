/* Importing modules */
import Router from './api/Router'
import Server from './api/Server'
import config from './config'

class App {
	private server: Server
	private router: Router

	constructor() {
		this.server = new Server()
		this.router = new Router()
	}

	public async start() {
		await this.server.start(config.port)
		this.server.app.use(this.router.get())
		this.server.start(config.port)
	}
}

export default App
