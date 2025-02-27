import { useQuery } from "@tanstack/react-query";
import UserTask from "../models/UserTask";
import APIClient from "../services/api-client";

const apiClient = new APIClient<UserTask>('/ToDo');

const useTask = (id: number) => {
    return useQuery({
      queryKey: ["task", id], // Unique cache key for each task
      queryFn: () => apiClient.get(id),
      enabled: !!id, // Only fetch if id is provided
    });
  };

export default useTask;