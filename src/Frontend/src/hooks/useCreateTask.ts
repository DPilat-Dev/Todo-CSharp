import { useMutation, useQueryClient } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import UserTask from "../models/UserTask";

const apiClient = new APIClient("/ToDo");

const useCreateTask = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: (newTask: Partial<UserTask>) => apiClient.create(newTask),
        onSuccess: () => {
            queryClient.invalidateQueries();
        }
    })
}

export default useCreateTask;