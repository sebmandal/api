export default class Product {
	private _name: string;
	private _price: number;
	private _description: string;
	private _id: number;

	constructor(name: string, price: number, description: string, id: number) {
		this._name = name;
		this._price = price;
		this._description = description;
		this._id = id;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		this._name = value;
	}

	get description(): string {
		return this._description;
	}

	set description(value: string) {
		this._description = value;
	}

	get price(): number {
		return this._price;
	}

	set price(value: number) {
		this._price = value;
	}

	get id(): number {
		return this._id;
	}

	set id(value: number) {
		this._id = value;
	}
}
