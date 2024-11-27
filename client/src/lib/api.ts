import {hc} from "hono/client";
import {ApiRoutes} from "../../../server/app.ts";

const client = hc<ApiRoutes>("http://localhost:5173/")

export const api = client.api;
