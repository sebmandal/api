import express, { Request, Response } from 'express'

export interface Endpoint {
	method:
		| 'all'
		| 'get'
		| 'post'
		| 'put'
		| 'delete'
		| 'patch'
		| 'options'
		| 'head'
	// Method in IRouterMatcher<T, Method extends "all" | "get" | "post" | "put" | "delete" | "patch" | "options" | "head" = any>
	// From Express declarations, Express version ^4.17.13
	path: string
	handler: (req: Request, res: Response) => void
}
