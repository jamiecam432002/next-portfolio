import ForkifySearchResultsList from './forkify-search-results-list';
import ForkifySearchResultsPagination from './forkify-search-results-pagination';
import styles from './forkify-search-results.module.css';

export default function ForkifySearchResults() {
	return (
		<div className={styles.forkifySearchResults}>
			<h2>SEARCH RESULTS</h2>
			<ForkifySearchResultsList />
			<ForkifySearchResultsPagination />
		</div>
	);
}
