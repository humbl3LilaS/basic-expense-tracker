import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useTotalAmount} from "@/hooks/use-total-amount.ts";


function App() {
    const {data, isPending} = useTotalAmount();
    return (
        <section className={"w-screen h-screen flex items-center justify-center"}>
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
        </section>
    )
}

export default App
