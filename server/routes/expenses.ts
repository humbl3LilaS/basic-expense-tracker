import {Hono} from "hono";
import {z} from "zod";
import {zValidator} from "@hono/zod-validator";

type Expense = {
    id: number;
    title: string;
    amount: number;
}

const fakeExpenses: Expense[] = [
    {
        id: 1,
        title: "Game Purchase",
        amount: 500,
    },
    {
        id: 2,
        title: "Laptop Purchase",
        amount: 2799,
    },
    {
        id: 3,
        title: "Keyboard Purchase",
        amount: 500,
    }
]

const createPostSchema = z.object({
    title: z.string(),
    amount: z.number(),
})


const expensesRoute = new Hono()
    .get("/", (ctx) => {
        return ctx.json({expenses: fakeExpenses})
    })
    .get(
        "/:id{[0-9]+}",
        async (ctx) => {
            const id = Number.parseInt(ctx.req.param("id"));
            const expense = fakeExpenses.find(item => item.id === id)
            if (!expense) {
                return ctx.json({error: "Not found"}, 404)
            }
            return ctx.json({expense: expense})
        }
    )
    .post(
        "/",
        zValidator("json", createPostSchema),
        async (ctx) => {
            const expense = ctx.req.valid("json")
            fakeExpenses.push({...expense, id: fakeExpenses.length + 1})
            return ctx.json({expense: expense})
        })


export default expensesRoute;