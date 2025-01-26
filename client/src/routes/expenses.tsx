import {createFileRoute} from '@tanstack/react-router'
import {useGetAllExpenses} from "@/hooks/use-get-all-expenses.ts";

export const Route = createFileRoute('/expenses')({
    component: Expenses,
})

function Expenses() {
    const {data, isPending} = useGetAllExpenses();
    console.log(data?.expenses)

    return <div>Welcome form expenses</div>
}
