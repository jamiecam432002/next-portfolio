import styles from './search.module.css';
import Button from './button';
import SearchIcon from '@/public/images/icons/icon-magnifying-glass.svg';

export default function Search() {
	return (
		<div>
			<input type='text' placeholder='Search over 1,000,000 recipes...' />
			<Button>
				<SearchIcon />
				<span>SEARCH</span>
			</Button>
		</div>
	);
}
