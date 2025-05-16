import styles from './Header.module.css';
import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HireBtn from './HireBtn';

export default function Header() {
	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerLogo}>
				<HeaderLogo />
			</div>
			<div className={styles.headerNav}>
				<HeaderNav />
			</div>

			<HireBtn />
		</header>
	);
}
