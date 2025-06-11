import styles from './forkify-header.module.css';

export default function ForkifyHeader({ children }) {
	return <header className={styles.header}>{children}</header>;
}
