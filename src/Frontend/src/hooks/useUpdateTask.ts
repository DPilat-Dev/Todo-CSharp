import { useMutation, useQueryClient } from "@tanstack/react-query";
import UserTask from "../models/UserTask";
import APIClient from "../services/api-client";

const apiClient = new APIClient<UserTask>('/ToDo');

const useUpdateTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, updatedTask}: {id: string; updatedTask: Partial<UserTask>}) => 
            apiClient.update(id, updatedTask),
        onSuccess: () => {
            queryClient.invalidateQueries();
        }
    });
}

export default useUpdateTask;