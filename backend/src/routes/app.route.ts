import { Application } from "express";

class AppRoute
{
    private readonly app: Application;

    constructor(app: Application)
    {
        this.app = app;
    }

    public init()
    {
        this.app.get("/", (req, res) =>
        {
            res.send("Hello World!");
        });
    }
}

export default AppRoute;
