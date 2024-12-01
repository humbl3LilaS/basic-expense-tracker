import {useQuery} from "@tanstack/react-query";
import {api} from "@/lib/api.ts";

export const useTotalAmount = () => {
    return useQuery({
        queryKey: ["total-amount"],
        queryFn: async () => {
            const res = await api.expenses["total-spent"].$get();
            if (!res.ok) {
                throw new Error("Server Error")
            }
            return await res.json()
        }
    })
}