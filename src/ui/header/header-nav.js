import Link from 'next/link';
import styles from './header-nav.module.css';

export default function HeaderNav() {
	return (
		<nav className={styles.headerNavigation}>
			<ul className={styles.headerNavlist}>
				<li className={styles.headerNavItem} key={'contact-me'}>
					<Link className={styles.headerNavLink} href='/contact-me'>
						Contact Me
					</Link>
				</li>
				{/* <li className={styles.headerNavItem} key={'see-what-i-can-do'}>
					<Link className={styles.headerNavLink} href='/see-what-i-can-do'>
						See What I Can Do
					</Link>
				</li> */}
				<li className={styles.headerNavItem} key={'secondary-skills'}>
					<Link className={styles.headerNavLink} href='/secondary-skills'>
						Secondary Skills
					</Link>
				</li>
			</ul>
		</nav>
	);
}
