import SearchResultsList from './search-results-list';
import SearchResultsPagination from './search-results-pagination';
import styles from './search-results.module.css';
export default function SearchResults() {
	return (
		<div className={styles.forkifySearchResults}>
			<h2>SEARCH RESULTS</h2>
			<SearchResultsList />
			<SearchResultsPagination />
		</div>
	);
}
