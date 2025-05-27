import Link from 'next/link';
import styles from './header-nav.module.css';

export default function HeaderNav() {
	return (
		<nav className={styles.headerNavigation}>
			<ul className={styles.headerNavlist}>
				<li className={styles.headerNavItem}>
					<Link className={styles.headerNavLink} href='/contact-me'>
						Contact Me
					</Link>
				</li>
				<li className={styles.headerNavItem}>
					<Link className={styles.headerNavLink} href='/secondary-skills'>
						Secondary Skills
					</Link>
				</li>
			</ul>
		</nav>
	);
}
