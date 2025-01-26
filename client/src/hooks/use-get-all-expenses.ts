import {useQuery} from "@tanstack/react-query";
import {api} from "@/lib/api.ts";

export const useGetAllExpenses = () => {
    return useQuery({
        queryKey: ["expenses"],
        queryFn: async () => {
            const res = await api.expenses.$get();
            if (!res.ok) {
                throw new Error("Not found")
            }
            return await res.json();
        }
    })
}