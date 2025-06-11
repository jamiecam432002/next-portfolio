import ForkifyRecipeIngredientItem from './forkify-recipe-ingredient-item';
import CartIcon from '@/public/images/forkify/icons/icon-shopping-cart.svg';

import styles from './forkify-recipe-ingredients.module.css';
import Button from '../ui/button';

export default function ForkifyRecipeIngredients() {
	return (
		<div className={styles.forkifyRecipe__ingredients}>
			<ul className={styles['forkifyRecipe__ingredients--list']}>
				<ForkifyRecipeIngredientItem />
				<ForkifyRecipeIngredientItem />
				<ForkifyRecipeIngredientItem />
				<ForkifyRecipeIngredientItem />
				<ForkifyRecipeIngredientItem />
				<ForkifyRecipeIngredientItem />
				<ForkifyRecipeIngredientItem />
			</ul>
			<Button>
				<CartIcon />
				<span>ADD TO SHOPPING LIST</span>
			</Button>
		</div>
	);
}
