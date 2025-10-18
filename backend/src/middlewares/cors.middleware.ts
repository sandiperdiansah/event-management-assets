import cors from "cors";

class CorsMiddleware
{
    public static init()
    {
        return cors({
            origin: process.env.ORIGIN_URLS!.split(","),
            credentials: true,
        });
    }
}

export default CorsMiddleware;
