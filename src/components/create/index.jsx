import { useState } from 'react';
import { createTaskApi } from '../../services/task';
import { Input, TextArea } from '../form';
import { Link, useNavigate } from "react-router-dom";
import dayjs from 'dayjs'
import styles from './style.module.scss';
import { resizeFile } from '../../utils/resizeImg';

export const Create = () => {
    const navigate = useNavigate();

    //! Стейты
	const [task, setTask] = useState({
		title: '',
		description: '',
		time: ''
	});
	const [taskFile, setTaskFile] = useState([]);
	const [preview, setPreviewImg] = useState([]);
	const [loading, setLoading] = useState(false)



	//! HandleChange и Preview Картинок
	const handleFileChange = async(e) => {
		await resizeFile(e.target.files[0])
		setTaskFile([...taskFile, e.target.files[0]]);

		const previewImage = URL.createObjectURL(e.target.files[0]);
        setPreviewImg([...preview, previewImage]);
	}
	const handleChange = (event) => {
		setTask({ ...task, [event.target.name]: event.target.value });
	};

    //! Добавления задачи - отправка на сервер
	const addTask = async(e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', task.title)
		formData.append('description', task.description)
		formData.append('time', dayjs(task.time).format('DD.MM.YYYY'))
		for (const image of taskFile) {
			formData.append("files", image);
		}
		setLoading(true);
		await createTaskApi(formData);
		setLoading(false);
		navigate("/");
		
	}

	return (
		<div className='container'>
			<form className={styles.form_wrapper} onSubmit={addTask} encType="multipart/form-data">
				<div className={styles.form_top}>
					<Input 
						type="text"
						name='title'
						value={task.title}
						onChange={handleChange}
						placeholder='Заголовок'
					/>
					<Input 
						type="date"
						placeholder='Дата'
						name='time'
						value={task.time}
						onChange={handleChange}
					/>
				</div>
				<div className={styles.form_middle}>
					<TextArea 
						placeholder='Описание'
						name='description'
						value={task.description}
						onChange={handleChange}
                        rows='6'
					>
					</TextArea>
				</div>
				<div className={styles.form_bottom}>
					<div className={styles.preview}>
						{preview && preview?.map((file, index) => (
							<img className={styles.preview_img} src={file} alt="File" key={index}/>
						))}
					</div>
					<div className={styles.form_btn_side}>
						<Link to='/'>На главную</Link>
						<div>
							<input 
								onChange={handleFileChange}
								type="file" 
								id="upload"
								hidden
								multiple
							/>
							<label htmlFor="upload">Добавить файл</label>
						</div>
						<button className={styles.form_btn} type='submit'>
							{loading ? 'Загрузка' : 'Сохранить'}
						</button>
					</div>
				</div>
			</form>
		</div>
	)
}
