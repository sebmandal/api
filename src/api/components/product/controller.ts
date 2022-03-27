import fs from 'fs'
import Product from '../../models/Product'

export default class ProductController {
        private data: Product[]
        private writeData: () => void

        constructor() {
                this.data = JSON.parse(
                        fs.readFileSync('./data/products.json', 'utf-8')
                )

                this.writeData = () => {
                        fs.writeFileSync(
                                './data/products.json',
                                JSON.stringify(this.data, null, 2)
                        )
                }
        }

        public generateId(): string {
                const id: string = Math.random().toString(36).substr(2, 9)
                if (this.data.find((product: Product) => product.id === id)) {
                        return this.generateId()
                }
                return id
        }

        public getProducts(): Product[] {
                return this.data
        }

        public getProductById(id: string): Product | undefined {
                return this.data.find((product: Product) => product.id === id)
        }

        public createProduct(product: Product): Product | undefined {
                // checking if the product has all the required fields
                if (
                        !product.name ||
                        !product.price ||
                        !product.description ||
                        !product.image ||
                        !product.category ||
                        !product.quantity
                )
                        return

                const newProduct: Product = {
                        id: this.generateId(),
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                        category: product.category,
                        quantity: product.quantity,
                }
                this.data.push(newProduct)
                this.writeData()
                return newProduct
        }

        public updateProduct(
                id: string,
                product: Product
        ): Product | undefined {
                const index: number = this.data.findIndex(
                        (p: Product) => p.id === id
                )
                if (index === -1) return undefined
                this.data[index] = {
                        id: product.id || this.data[index].id,
                        name: product.name || this.data[index].name,
                        price: product.price || this.data[index].price,
                        description:
                                product.description ||
                                this.data[index].description,
                        image: product.image || this.data[index].image,
                        category: product.category || this.data[index].category,
                        quantity: product.quantity || this.data[index].quantity,
                }
                this.writeData()
                return this.data[index]
        }

        public deleteProduct(id: string): boolean {
                const index: number = this.data.findIndex(
                        (p: Product) => p.id === id
                )
                if (index === -1) return false
                this.data.splice(index, 1)
                this.writeData()
                return true
        }

        // for testing
        public clearProducts(): void {
                this.data = []
                this.writeData()
        }
}
