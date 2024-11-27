import {Hono} from "hono";
import {logger} from "hono/logger";
import expensesRoute from "./routes/expenses";
import {serveStatic} from "hono/bun";

const app = new Hono();

app.use("*", logger())

const route = app.basePath("/api").route("/expenses", expensesRoute);

app.get("*", serveStatic({root: "./client/dist"}))
app.get("*", serveStatic({path: "./client/dist/index.html"}))

export type ApiRoutes = typeof route;

export default app;