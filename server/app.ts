import {Hono} from "hono";
import {logger} from "hono/logger";

const app = new Hono();

app.use("*", logger())
app.get("/test", (ctx) => {
    return ctx.json({message: "This is testing madafakas"})
})


export default app;