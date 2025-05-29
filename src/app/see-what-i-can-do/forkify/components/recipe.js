import styles from './recipe.module.css';
import Button from './button';
import CartIcon from '@/public/images/icons/icon-shopping-cart.svg';
import ArrowRightIcon from '@/public/images/icons/icon-triangle-right.svg';

export default function Recipe() {
	return (
		<div className={styles.forkifyRecipe}>
			<h2>Recipe</h2>
			<Button>
				<CartIcon />
				<span>ADD TO SHOPPING LIST</span>
			</Button>
			<Button>
				<span>DIRECTIONS</span>
				<ArrowRightIcon />
			</Button>
		</div>
	);
}
