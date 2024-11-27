import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useQuery} from "@tanstack/react-query";

function App() {
    const {data} = useQuery({
        queryKey: ["total-spent"],
        queryFn: async () => {
            const data = await fetch("/api/expenses/total-spent");
            return data.json()
        }
    })
    console.log(data)
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
                    {300}
                </CardContent>
            </Card>
        </section>
    )
}

export default App
