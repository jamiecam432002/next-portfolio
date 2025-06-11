import Button from '../ui/button';
import ArrowRightIcon from '@/public/images/forkify/icons/icon-triangle-right.svg';
import styles from './forkify-recipe-directions.module.css';

export default function ForkifyRecipeDirections() {
	return (
		<div className={styles.forkifyRecipe__directions}>
			<h2>How to cook it</h2>
			<p className={styles.forkifyDirectionsText}>
				This recipe was carefully designed and tested by The Pioneer Woman.
				Please check out directions at their website.
			</p>
			<Button>
				<span>DIRECTIONS</span>
				<ArrowRightIcon />
			</Button>
		</div>
	);
}
