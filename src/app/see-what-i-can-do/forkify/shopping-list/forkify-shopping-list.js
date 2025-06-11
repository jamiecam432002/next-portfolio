import styles from './forkify-shopping-list.module.css';
import Button from '../ui/button';
import CartIcon from '@/public/images/forkify/icons/icon-shopping-cart.svg';
export default function ForkifyShoppingList() {
	return (
		<div className={styles.forkifyShopping}>
			<h2>My Shopping List</h2>
			<Button>
				<CartIcon />
				<span>CLEAR SHOPPING LIST</span>
			</Button>
		</div>
	);
}
