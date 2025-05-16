import Link from 'next/link';
import styles from './HeaderNav.module.css';

export default function HeaderNav() {
	return (
		<nav className={styles.headerNavigation}>
			<ul className={styles.headerNavlist}>
				<li className={styles.headerNavItem}>
					<Link className={styles.headerNavLink} href='/angular-projects'>
						Projects
					</Link>
				</li>
				<li className={styles.headerNavItem}>
					<Link className={styles.headerNavLink} href='/see-what-i-can-do'>
						See What I Can Do
					</Link>
				</li>
				<li className={styles.headerNavItem}>
					<Link className={styles.headerNavLink} href='/the-extras'>
						The Extras
					</Link>
				</li>
				<li className={styles.headerNavItem}>
					<Link className={styles.headerNavLink} href='/contact-me'>
						Contact Me
					</Link>
				</li>
			</ul>
		</nav>
	);
}
