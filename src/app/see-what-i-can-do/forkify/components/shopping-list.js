import styles from './shopping-list.module.css';
import Button from './button';
import CartIcon from '@/public/images/icons/icon-shopping-cart.svg';
export default function ShoppingList() {
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
