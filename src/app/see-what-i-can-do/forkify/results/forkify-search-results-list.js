'use client';

import ForkifySearchResultItem from './forkify-search-result-item';
import Spinner from '../ui/spinner';
import styles from './forkify-search-results-list.module.css';
import { useForkify } from '../data/forkify-context';
import { useState } from 'react';

export default function ForkifySearchResultsList() {
	const itemsPerPage = 10;
	const { searchResults, searchIsLoading } = useForkify();
	const [currentPage, setCurrentPage] = useState(1);

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const totalPages = Math.ceil(searchResults.length / itemsPerPage);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	if (searchIsLoading) return <Spinner />;
	if (searchResults.length)
		return (
			<>
				<ul className={styles.search__results}>
					{searchResults.slice(startIndex, endIndex).map((recipe) => (
						<ForkifySearchResultItem key={recipe.id} recipe={recipe} />
					))}
				</ul>
				<div className={styles.paginationControls}>
					<ul
						className={styles.pagination}
						role='navigation'
						aria-label='Pagination'>
						<li
							className={`${styles.paginationPrevious} ${
								styles.paginationItem
							} ${currentPage === 1 ? styles.paginationDisabled : ''}`}>
							<button
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}>
								<span>Previous</span>
							</button>
						</li>
						{Array.from({ length: totalPages }, (_, i) => i + 1).map(
							(pageNumber) => (
								<li
									key={pageNumber}
									className={`${styles.paginationItem} ${
										currentPage === pageNumber ? styles.paginationCurrent : ''
									}`}>
									<button
										onClick={() => handlePageChange(pageNumber)}
										disabled={currentPage === pageNumber}>
										{pageNumber}
									</button>
								</li>
							)
						)}

						<li
							className={`${styles.paginationNext} ${styles.paginationItem} ${
								currentPage === totalPages ? styles.paginationDisabled : ''
							}`}>
							<button
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages}>
								<span>Next</span>
							</button>
						</li>
					</ul>
				</div>
				{/* <div>
					{Array.from({ length: totalPages }, (_, i) => i + 1).map(
						(pageNumber) => (
							<li key={pageNumber}>
								<button
									onClick={() => handlePageChange(pageNumber)}
									disabled={currentPage === pageNumber}>
									{pageNumber}
								</button>
							</li>
						)
					)}
				</div> */}
			</>
		);
}
