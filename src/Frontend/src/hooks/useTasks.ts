import { useQuery } from "@tanstack/react-query";
import UserTask from "../models/UserTask";
import APIClient from "../services/api-client";

const apiClient = new APIClient<UserTask>('/ToDo');

const useTasks = () => {
    return useQuery({
      queryKey: ["tasks"], // Cache key
      queryFn: () => apiClient.getAll(),
      staleTime: 1000 * 60 * 5, // Cache for 5 minutes
    });
  };

export default useTasks;