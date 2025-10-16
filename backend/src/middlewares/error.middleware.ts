import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";
import ErrorException from "@/exceptions/error.exception";

class ErrorMiddleware
{
    public static globalError(error: Error, req: Request, res: Response, _next: NextFunction)
    {
        console.log("Error: ", error);

        if (error instanceof ZodError)
        {
            return res.status(400).json({
                success: false,
                message: error.issues[0].message,
                errors: z.flattenError(error),
            });
        }

        if (error instanceof ErrorException)
        {
            return res.status(error.status).json({
                success: false,
                message: error.message,
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }

    public static notFound(req: Request, res: Response, _next: NextFunction)
    {
        return res.status(404).json({
            success: false,
            message: `Route ${req.originalUrl} not found`,
        });
    }
}

export default ErrorMiddleware;
