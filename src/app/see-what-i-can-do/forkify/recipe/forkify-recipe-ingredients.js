import ForkifyRecipeIngredientItem from './forkify-recipe-ingredient-item';

import styles from './forkify-recipe-ingredients.module.css';
import { useForkify } from '../data/forkify-context';

export default function ForkifyRecipeIngredients() {
	const { recipe } = useForkify();
	const ingredients = recipe.ingredients;
	console.log(ingredients);
	return (
		<div className={styles.forkifyRecipe__ingredients}>
			<ul className={styles['forkifyRecipe__ingredients--list']}>
				{ingredients.map((ing, i) => (
					<ForkifyRecipeIngredientItem ingredient={ing} key={i} />
				))}
			</ul>
		</div>
	);
}
