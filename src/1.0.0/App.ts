/* Importing modules */
import Server from './api/Server'
import config from './config'

class App {
	private server: Server

	constructor() {
		this.server = new Server()
	}

	public async start() {
		this.server.start(config.port)
		console.log(`Server running on port ${config.port}`)
	}
}

export default App
