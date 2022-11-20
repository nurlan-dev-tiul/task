import { useFetchTasks } from '../../hooks/useFetch';
import { deleteTaskApi, editCompleteApi } from '../../services/task';
import { Task } from '../task';
import styles from './style.module.scss';

export const TaskList = () => {
	const { tasks, refetch} = useFetchTasks();

	//! Удаление задачи
	const deleteTask = async(id) => {
		try {
			await deleteTaskApi(id);
			refetch()
		} catch (error) {
			
		}
	}

	//! Выполнено - Completed
	const completeTask = async(id, completed) => {
		try {
			const completeData = {
				taskId: id,
				complete: completed === true ? false : true 
			}
			await editCompleteApi(completeData)
			refetch()
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<div className='container'>
			<div className={styles.list}>
				{tasks?.length > 0 ? (
					tasks?.map((task) => (
						<Task 
							key={task?._id} 
							item={task} 
							deleteTask={deleteTask}
							completeTask={completeTask}
						/>
					))
				): <div>Ничего нет</div>}
			</div>
		</div>
	)
}
