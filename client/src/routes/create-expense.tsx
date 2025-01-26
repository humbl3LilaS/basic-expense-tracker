import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/create-expense')({
  component: CreateExpenses,
})

function CreateExpenses() {
  return <div>Welcome form Create expense</div>
}
