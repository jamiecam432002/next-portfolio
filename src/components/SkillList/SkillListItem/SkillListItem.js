import styles from './SkillListItem.module.css';

export default function SkillListItem({ skill, icon }) {
	return (
		<div className={styles.skillListItem}>
			<div className={styles.skillListItemIcon}>1</div>
			<div className={styles.skillListItemText}>{skill.text}</div>
		</div>
	);
}
