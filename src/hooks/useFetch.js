import { useState, useEffect } from 'react';
import { getTasksApi } from '../services/task';


export const useFetchTasks = () => {
    const [tasks, setTasks] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const refetch = async () => {
        try {
            setIsLoading(true);
            const { data } = await getTasksApi();
            setTasks(data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
        }
    }

    useEffect(() => {
        refetch();
    }, []);

    return {
        tasks,
        error,
        isLoading,
        refetch
    }
}
