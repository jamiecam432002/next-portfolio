import Link from 'next/link';
import styles from './HeaderNav.module.css';

export default function HeaderNav() {
	return (
		<nav className={styles.headerNavigation}>
			<ul className={styles.headerNavlist}>
				<li className={styles.headerNavItem}>
					<Link className={styles.headerNavLink} href='/contact-me'>
						Contact Me
					</Link>
				</li>
			</ul>
		</nav>
	);
}
