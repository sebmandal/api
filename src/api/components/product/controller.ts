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
		const p = this.data.find((p: Product) => p.id === id)
		if (!p) return

		if (product.name) p.name = product.name
		if (product.price) p.price = product.price
		if (product.description) p.description = product.description
		if (product.image) p.image = product.image
		if (product.category) p.category = product.category
		if (product.quantity) p.quantity = product.quantity
		
		this.writeData()
		return p
        }

	public deleteProduct(id: string): Product | undefined {
		const product: Product | undefined = this.data.find(
			(product: Product) => product.id === id
		)

		if (!product) return

		this.data = this.data.filter(
			(product: Product) => product.id !== id
		)

		this.writeData()

		return product
	}

        // for testing
        public clearProducts(): void {
                this.data = []
                this.writeData()
        }
}
