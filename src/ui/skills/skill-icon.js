import WinkIcon from '@/public/images/icons/wink.svg';
import StarIcon from '@/public/images/icons/star.svg';
import GrinIcon from '@/public/images/icons/grin.svg';
import CheckIcon from '@/public/images/icons/check.svg';
import styles from './skill-icon.module.css';

export default function SkillIcon({ icon }) {
	if (icon === 'wink') return <WinkIcon className={styles.skillIcon} />;
	if (icon === 'star') return <StarIcon className={styles.skillIcon} />;
	if (icon === 'grin') return <GrinIcon className={styles.skillIcon} />;
	if (icon === 'check') return <CheckIcon className={styles.skillIcon} />;
}
