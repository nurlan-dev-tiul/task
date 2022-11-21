import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetchById } from '../../hooks/useFetchById';
import dayjs from 'dayjs';
import styles from './style.module.scss';

export const Detail = () => {
	const {id} = useParams();
	const {task} = useFetchById(id);

	const taskTime = dayjs(task?.time).format('DD-MM-YYYY')
	const date = dayjs();
	const date1 = dayjs(task?.time);
	const res1 = date.diff(date1, 'day');
	const res2 = date1.diff(date, 'day')

	return (
		<div className='container'>
			<div className={styles.detail}>
				<h2>{task?.title}</h2>
				<p>{task?.description}</p>
				<h4>Дата окончания: {taskTime}{res1 > res2 ? '(Истекло)': null}</h4>
				<span><strong>Статус:</strong> {task?.completed ? 'Выполнено' : 'Не выполнено'}</span>
				<div className={styles.box}>
					{task?.file && (
						task?.file.map((img, index) => (
							<div className={styles.img_box} key={index}>
								<a href={img?.url} target="_blank">
									<img src={img?.url} alt="" />
								</a>
							</div>
						))
					)}
				</div>
				<Link className={styles.detail_link} to='/'>{`<< На главную страницу`}</Link>
			</div>
		</div>
	)
}
