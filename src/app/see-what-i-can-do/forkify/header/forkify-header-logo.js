import Image from 'next/image';
import ForkifyLogo from '@/public/images/forkify/forkify-logo.png';
import styles from './forkify-header-logo.module.css';

export default function ForkifyHeaderLogo() {
	return (
		<div className={styles.forkify__header__logo}>
			<Image src={ForkifyLogo} alt='Forkify' width={165} height={54} />
		</div>
	);
}
