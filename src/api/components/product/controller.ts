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

        // The generateId method generates a simple unique id for each product
        // The id is random and has a length of 9 characters
        // O(n) complexity where n is the number of products in the array
        public generateId(): string {
                const id: string = Math.random().toString(36).substr(2, 9)

                // If the generated id is already in the data array, generate a new one
                if (this.data.find((product: Product) => product.id === id)) {
                        return this.generateId()
                }

                return id
        }

        // The getTotalProducts method returns the entire array of products
        public getProducts(): Product[] {
                return this.data
        }

        // The getProductById method returns a product by finding the corresponding product id
        public getProductById(id: string): Product | undefined {
                return this.data.find((product: Product) => product.id === id)
        }

        public createProduct(product: Product): Product | undefined {
                // Checking if the product has all the required fields
                if (
                        !product.name ||
                        !product.price ||
                        !product.description ||
                        !product.image ||
                        !product.category ||
                        !product.quantity
                )
                        return

                // Making the product variable
                const newProduct: Product = {
                        id: this.generateId(),
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        image: product.image,
                        category: product.category,
                        quantity: product.quantity,
                }

                // Adding the new product to the data array and writing the data to the file
                this.data.push(newProduct)
                this.writeData()

                return newProduct
        }

        // The updateProduct method updates a product by finding the corresponding product id and replacing the inputted properties
        public updateProduct(
                id: string,
                product: Product
        ): Product | undefined {
                // Checking if a product with the id exists
                const p = this.data.find((p: Product) => p.id === id)
                if (!p) return

                // Replacing the properties of the product with the inputted properties
                if (product.name) p.name = product.name
                if (product.price) p.price = product.price
                if (product.description) p.description = product.description
                if (product.image) p.image = product.image
                if (product.category) p.category = product.category
                if (product.quantity) p.quantity = product.quantity

                // Writing the data to the file
                this.writeData()

                // Returning the updated product
                return p
        }

        // The deleteProduct method deletes a product by finding the corresponding product id
        public deleteProduct(id: string): Product | undefined {
                // Finding the product with the corresponding id
                const product: Product | undefined = this.data.find(
                        (product: Product) => product.id === id
                )

                // If the product doesn't exist, return undefined
                if (!product) return

                // Removing the product from the data array and writing the data to the file
                this.data = this.data.filter(
                        (product: Product) => product.id !== id
                )
                this.writeData()

                // Returning the deleted product
                return product
        }
}
