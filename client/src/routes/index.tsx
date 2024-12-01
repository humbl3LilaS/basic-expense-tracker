import {createFileRoute} from '@tanstack/react-router'
import {useTotalAmount} from "@/hooks/use-total-amount.ts";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";

export const Route = createFileRoute('/')({
    component: RouteComponent,
})

function RouteComponent() {
    const {data, isPending} = useTotalAmount();
    return (
        <div className={"w-full h-full flex items-center justify-center"}>
            <Card className={"w-[350px]"}>
                <CardHeader>
                    <CardTitle>
                        Total Spent
                    </CardTitle>
                    <CardDescription>
                        The total amount you've spent
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isPending ? "..." : data?.total}
                </CardContent>
            </Card>
        </div>
    )
}
