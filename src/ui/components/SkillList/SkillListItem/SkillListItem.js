import SkillIcon from '../SkillIcon/SkillIcon';
import styles from './SkillListItem.module.css';

export default function SkillListItem({ skill }) {
	return (
		<div className={styles.skillListItem}>
			<SkillIcon icon={skill.icon} />
			<p className={styles.skillListItemText}>{skill.text}</p>
		</div>
	);
}
