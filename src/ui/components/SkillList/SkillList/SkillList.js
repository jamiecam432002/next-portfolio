import styles from './SkillList.module.css';

export default function SkillList({ children }) {
	return <div className={styles.skillList}>{children}</div>;
}
