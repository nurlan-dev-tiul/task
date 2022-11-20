import styles from './style.module.scss';

export const Input = ({name, type, value, placeholder, onChange}) => {
	return (
		<input 
			className={styles.inp} 
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}

export const TextArea = ({name, type, value, placeholder, onChange, rows}) => {
	return (
		<textarea
			className={styles.textarea_inp} 
			type={type}
			name={name}
			rows={rows}
			value={value}
			onChange={onChange}
			placeholder={placeholder}
		/>
	)
}
