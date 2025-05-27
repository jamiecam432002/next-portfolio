import Link from 'next/link';
import Image from 'next/image';
import styles from './header-logo.module.css';

export default function HeaderLogo() {
	return (
		<Link className={styles.headerLink} href='/'>
			<Image
				src='/images/james.jpg'
				width={240}
				height={240}
				alt='image of james a cameron'
			/>
		</Link>
	);
}
