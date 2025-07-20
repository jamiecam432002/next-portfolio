import Button from '../ui/button';
import ArrowRightIcon from '@/public/images/forkify/icons/icon-triangle-right.svg';
import styles from './forkify-recipe-directions.module.css';
import { useForkify } from '../data/forkify-context';

export default function ForkifyRecipeDirections() {
	const { recipe, recipeIsLoading } = useForkify();

	return (
		<div className={styles.forkifyRecipe__directions}>
			<h2>How to cook it</h2>
			<p className={styles.forkifyDirectionsText}>
				This recipe was carefully designed and tested by{' '}
				<span className={styles.forkifyPublisher}>{recipe.publisher}</span>.
				Please check out directions at their website.
			</p>
			<Button url={recipe.source_url}>
				<span>DIRECTIONS</span>
				<ArrowRightIcon />
			</Button>
		</div>
	);
}
