import { useForkify } from '../data/forkify-context';
import styles from './button.module.css';

export default function Button({
	url,
	type,
	children,
	onClick,
	className = '',
}) {
	const { recipe, addBookmark } = useForkify();
	if (url)
		return (
			<a href={url} onClick={onClick} className={styles.btn} target='_blank'>
				{children}
			</a>
		);
	if (type === 'tiny')
		return (
			<button onClick={onClick} className={`${styles['btn-tiny']}`}>
				{children}
			</button>
		);
	if (type === 'love')
		return (
			<button
				onClick={() => addBookmark(recipe)}
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
