import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {useQuery} from "@tanstack/react-query";
import {api} from "@/lib/api.ts";


function App() {
    const {data} = useQuery({
        queryKey: ["total-spent"],
        queryFn: async () => {
            const data = await api.expenses["total-spent"].$get();
            return data.json();
        }
    })

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
                    {data?.total}
                </CardContent>
            </Card>
        </section>
    )
}

export default App
