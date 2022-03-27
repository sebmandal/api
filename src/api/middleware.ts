// middleware
import express, { Request, Response, NextFunction } from 'express'

export default (req: Request, res: Response, next: NextFunction) => {
        res.status(404).json({
                status: 'error',
                message: 'Route not found',
        })

        next()
}
