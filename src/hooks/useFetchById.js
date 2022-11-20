import { useState, useEffect } from 'react';
import { detailTaskApi } from '../services/task';


export const useFetchById = (id) => {
    const [task, setTasks] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const refetch = async () => {
        try {
            setIsLoading(true);
            const { data } = await detailTaskApi(id);
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
        task,
        error,
        isLoading,
        refetch
    }
}
