import { useState } from 'react';
import { useFetchById } from '../../hooks/useFetchById';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { editTaskApi } from '../../services/task';
import { useNavigate } from "react-router-dom";
import { Input, TextArea } from '../form';
import styles from './style.module.scss';

export const Edit = () => {
    const { id } = useParams();
	const { task } = useFetchById(id) //! Получаем задачу по id
	const navigate = useNavigate();

	//! Стейт
    const [taskEdit, setTaskEdit] = useState({
		title: '',
		description: '',
		time: ''
	});

	//! HandleChange
	const handleChange = event => {
		const { name, value } = event.target;
		setTaskEdit({ ...taskEdit, [name]: value });
	};

	//! Сохранение данных - отправка н сервер
    const editTask = async(e) => {
        e.preventDefault()
		try {
			await editTaskApi(id, taskEdit);
			navigate('/')
		} catch (error) {
			
		}
    }
	
    useEffect(() => {
		setTaskEdit(task);
    }, [id, task]);

    return (
        <div className='container'>
			<form className={styles.form_wrapper} onSubmit={editTask} encType="multipart/form-data">
				<div className={styles.form_top}>
					<Input 
						type="text"
						name='title'
						value={taskEdit?.title}
						onChange={(e) => setTaskEdit({...taskEdit, title: e.target.value})}
					/>
					<Input 
						type="date"
						placeholder='Дата'
						name='time'
						value={taskEdit?.time}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.form_middle}>
					<TextArea 
						rows='6'
						placeholder='Описание'
						name='description'
						value={taskEdit?.description}
						onChange={handleChange}
					>
					</TextArea>
				</div>
				<div className={styles.form_bottom}>
					<div className={styles.form_btn_side}>
						<button className={styles.form_btn} type='submit'>
							Сохранить
						</button>
					</div>
					<Link to='/'>
						На главную страницу
					</Link>
				</div>
			</form>
        </div>
    )
}
