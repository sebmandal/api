import fs from 'fs'
import Product from '../../models/Product'

export default class ProductController {
        private data: Product[]

        constructor() {
                this.data = JSON.parse(
                        fs.readFileSync('./data/products.json', 'utf-8')
                )
        }

        public getProducts(): Product[] {
                return this.data
        }

	public getProductById(id: string): Product | undefined {
		this.data.forEach((product: Product) => console.log(product))
		return this.data.find((product: Product) => product.id === id)
	}
}

