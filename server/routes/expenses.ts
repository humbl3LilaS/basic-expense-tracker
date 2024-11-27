import {Hono} from "hono";
import {z} from "zod";
import {zValidator} from "@hono/zod-validator";

type Expense = z.infer<typeof expenseSchema>

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
        amount: 600,
    }
]

const expenseSchema = z.object({
    id: z.number().int().positive().min(1),
    title: z.string().min(3).max(100),
    amount: z.number().int().positive(),
})

const createPostSchema = expenseSchema.omit({id: true})


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
                return ctx.notFound();
            }
            return ctx.json({expense: expense})
        }
    )
    .get(
        "/total-spent",
        async (ctx) => {
            const total = fakeExpenses.reduce(
                (acc, curr) => {
                    return acc + curr.amount;
                }, 0)
            return ctx.json({total})
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
    .delete(
        "/:id{[0-9]+}",
        async (ctx) => {
            const id = Number.parseInt(ctx.req.param("id"));
            const expenseIdx = fakeExpenses.findIndex(item => item.id === id)
            if (expenseIdx === -1) {
                return ctx.notFound();
            }
            const deletedExpense = fakeExpenses.splice(expenseIdx, 1)[0];

            return ctx.json({expense: deletedExpense})

        }
    )


export default expensesRoute;