import styles from './button.module.css';

export default function Button({ type, children, onClick, className = '' }) {
	if (type === 'tiny')
		return (
			<button onClick={onClick} className={`${styles['btn-tiny']}`}>
				{children}
			</button>
		);
	if (type === 'love')
		return (
			<button
				onClick={onClick}
				className={`${styles.btn} ${styles['btn-love']}`}>
				{children}
			</button>
		);
	return (
		<button onClick={onClick} className={styles.btn}>
			{children}
		</button>
	);
}
