import SkillIcon from './skill-icon';
import styles from './skill-list-item.module.css';

export default function SkillListItem({ skill }) {
	return (
		<div className={styles.skillListItem}>
			<SkillIcon icon={skill.icon} />
			<p className={styles.skillListItemText}>{skill.text}</p>
		</div>
	);
}
