import { getAuthenticatedAppForUser } from '@/src/lib/firebase/serverApp';
import styles from './skill-list.module.css';
import { getSkills } from '@/src/lib/firebase/firestore';
import SkillListItem from './skill-list-item';
import { getFirestore } from 'firebase/firestore';

export default async function SkillList({ type }) {
	const { firebaseServerApp } = await getAuthenticatedAppForUser();
	const skills = await getSkills(getFirestore(firebaseServerApp), type);
	return (
		<div className={styles.skillList}>
			{skills &&
				skills.map((skill) => (
					<SkillListItem key={skill.title} skill={skill} />
				))}
			;
		</div>
	);
}
