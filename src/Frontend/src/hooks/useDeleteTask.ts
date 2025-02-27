import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient('/ToDo');

const useDeleteTask = () => {
    const queryClient = useQueryClient(); 

    return useMutation({
        mutationFn: (id: string) => apiClient.delete(id),
        onSuccess: () => {
            queryClient.invalidateQueries();
        }
    });
}

export default useDeleteTask;