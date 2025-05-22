'use client';

import Link from 'next/link';
import styles from './HireBtn.module.css';

export default function HireBtn() {
	return (
		<Link href='/contact-me' className={styles.hireBtnEl}>
			hire me
		</Link>
	);
}
