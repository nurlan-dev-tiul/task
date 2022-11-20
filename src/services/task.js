import { apiClient } from "./api";

//! Добавление задачи
export const createTaskApi = async (data) => {
    return await apiClient.post('/tasks', data);
}

//! Получение всех задач
export const getTasksApi= async () => {
    return await apiClient.get(`/tasks`);
}

//! Детальная задача
export const detailTaskApi = async (id) => {
    return await apiClient.get(`/tasks/${id}`);
}

//! Редактирование
export const editTaskApi = async (id, data) => {
    return await apiClient.put(`/tasks/${id}`, data);
}

//! Выполненная задача
export const editCompleteApi = async (data) => {
    return await apiClient.put(`/tasks`, data);
}

//! Удаление
export const deleteTaskApi = async (id) => {
    return await apiClient.delete(`/tasks/${id}`);
}