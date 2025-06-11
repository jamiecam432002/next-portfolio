'use client';

import ForkifySearchResultItem from './forkify-search-result-item';
import Spinner from '../ui/spinner';
import styles from './forkify-search-results-list.module.css';
import { useForkify } from '../data/forkify-context';

export default function ForkifySearchResultsList() {
	const { searchResults, isLoading } = useForkify();
	if (isLoading) return <Spinner />;
	return (
		<ul className={styles.search__results}>
			{searchResults.map((recipe) => (
				<ForkifySearchResultItem key={recipe.id} recipe={recipe} />
			))}
		</ul>
	);
}
