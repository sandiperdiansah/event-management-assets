import App from "@/app";

const app = new App();

app.listen();

process.on("SIGINT", () =>
{
    console.log("SERVER SHUTDOWN (SIGINT)");
    process.exit(0);
});

process.on("SIGTERM", () =>
{
    console.log("SERVER SHUTDOWN (SIGTERM)");
    process.exit(0);
});
