import IconCheck from '@/public/images/forkify/icons/icon-check.svg';
import styles from './forkify-recipe-ingredient-item.module.css';

export default function ForkifyRecipeIngredientItem() {
	return (
		<li className={styles['forkifyRecipe__ingredients--list-item']}>
			<span className={styles['forkifyRecipe__ingredients--list-icon']}>
				<IconCheck />
			</span>
			<div
				className={styles['forkifyRecipe__ingredients--ingredient-quantity']}>
				1
			</div>
			<div className={styles['forkifyRecipe__ingredients--ingredient-name']}>
				onion, chopped
			</div>
		</li>
	);
}
