import Button from '../ui/button';
import SearchIcon from '@/public/images/forkify/icons/icon-magnifying-glass.svg';
import styles from './forkify-search.module.css';
import { useState } from 'react';
import { useForkify } from '../data/forkify-context';

export default function ForkifySearch() {
	const [query, setQuery] = useState('');
	const { getRecipes } = useForkify();

	function handleSearch(e) {
		e.preventDefault();
		getRecipes(query);
		setQuery('');
	}

	return (
		<div className={styles.forkify__search}>
			<form className={styles.forkify__search__form}>
				<input
					className={styles.forkify__search__field}
					type='text'
					placeholder='Search over 1,000,000 recipes...'
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<div className={styles.forkify__search__btn}>
					<Button onClick={handleSearch}>
						<SearchIcon />
						<span>SEARCH</span>
					</Button>
				</div>
			</form>
		</div>
	);
}
