import IconCheck from '@/public/images/forkify/icons/icon-check.svg';
import styles from './forkify-recipe-ingredient-item.module.css';

export default function ForkifyRecipeIngredientItem({ ingredient }) {
	return (
		<li className={styles['forkifyRecipe__ingredients--list-item']}>
			<span className={styles['forkifyRecipe__ingredients--list-icon']}>
				<IconCheck />
			</span>
			<span
				className={styles['forkifyRecipe__ingredients--ingredient-quantity']}>
				{ingredient.quantity}
			</span>
			<div className={styles['forkifyRecipe__ingredients--ingredient-unit']}>
				{ingredient.unit} {ingredient.description}
			</div>
		</li>
	);
}
