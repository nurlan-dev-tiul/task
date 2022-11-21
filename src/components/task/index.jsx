import dayjs from 'dayjs';
import { BiCheckCircle, BiTrashAlt, BiHighlight } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { truncateString } from '../../utils/truncateStr';
import styles from './style.module.scss';

export const Task = ({item, deleteTask, completeTask}) => {

	const date = dayjs();
	const date1 = dayjs(item?.time);
	const res1 = date.diff(date1, 'day');
	const res2 = date1.diff(date, 'day')

	return (
		<div className={styles.task}>
			<div className={styles.task_content}>
				<Link className={styles.title} to={`task/${item?._id}`}>
					{truncateString(item?.title, 30, '...')}
				</Link>

				<div className={styles.task_icons}>
					{res1 > res2 ? (
						<h5 className={styles.time}>Истекло</h5>
					) : null}
					<BiCheckCircle 
						className={styles.icon} 
						style={item?.completed ? {color: 'green'}: ''}
						onClick={() => completeTask(item?._id, item?.completed)}
					/>
					<Link to={`task-edit/${item?._id}`}>
						<BiHighlight className={styles.icon} />
					</Link>
					<BiTrashAlt className={styles.icon} onClick={() => deleteTask(item?._id)} />
				</div>
			</div>
		</div>
	)
}
