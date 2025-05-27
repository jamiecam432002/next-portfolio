import Link from 'next/link';
import styles from './hire-btn.module.css';

export default function HireBtn() {
	return (
		<Link href='/contact-me' className={styles.hireBtnEl}>
			hire me
		</Link>
	);
}
