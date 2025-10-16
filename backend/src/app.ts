import "dotenv/config";
import express, { Application } from "express";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";

import CorsMiddleware from "@/middlewares/cors.middleware";
import AppRoute from "@/routes/app.route";

class App
{
    private readonly app: Application;
    private readonly route: AppRoute;

    constructor()
    {
        this.app = express();
        this.route = new AppRoute(this.app);
        this.init();
    }

    private init()
    {
        // middlewares
        this.app.use(helmet());
        this.app.use(compression({ treshold: 1024 }));
        this.app.use(cookieParser());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(CorsMiddleware.init());

        // routes
        this.route.init();
    }

    public listen(port: number = Number(process.env.PORT) || 8000)
    {
        this.app.listen(port, () =>
        {
            console.log(`Server listening http://localhost:${port}`);
        });
    }
}

export default App;
