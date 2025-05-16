'use client';

import { useState } from 'react';
import styles from './SkillList.module.css';

export default function SkillList({ children, initialSkills }) {
	const [skills, setSkills] = useState(initialSkills);
	return <div className={styles.skillList}>{children}</div>;
}
