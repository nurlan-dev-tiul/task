import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchById } from '../../hooks/useFetchById';
import dayjs from 'dayjs';
import styles from './style.module.scss';

export const Detail = () => {
	const {id} = useParams();
	const {task} = useFetchById(id);
	const date = new Date();
	const form = dayjs(date).format('DD.MM.YYYY')

	return (
		<div className='container'>
			<div className={styles.detail}>
				<h2>{task?.title}</h2>
				<p>{task?.description}</p>
				<h4>Дата окончания: {task?.time}{task?.time < form ? '(Истекло)': null}</h4>
				<span>{task?.completed ? 'Выполнен' : 'Не выполнен'}</span>
				<div className={styles.box}>
					{task?.file && (
						task?.file.map((img, index) => (
							<div className={styles.img_box} key={index}>
								<img src={img?.url} alt="" />
							</div>
						))
					)}
				</div>
			</div>
		</div>
	)
}
