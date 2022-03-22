import fs from 'fs'
import Product from '../../models/Product'

export default class ProductController {
        private data: Product[]

        constructor() {
                this.data = JSON.parse(
                        fs.readFileSync('./data/products.json', 'utf-8')
                )
        }

        public getAllProducts(): Product[] {
                return this.data
        }
}
