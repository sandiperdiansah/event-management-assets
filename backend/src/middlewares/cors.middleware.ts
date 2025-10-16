import cors from "cors";

class CorsMiddleware
{
    public static init()
    {
        return cors({
            origin: process.env.ORIGIN_URLS!.split(","),
            methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
            allowedHeaders: ["Content-Type", "Authorization"],
        });
    }
}

export default CorsMiddleware;
