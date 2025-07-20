import styles from './forkify-search-result-item.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useForkify } from '../data/forkify-context';
import { useRef } from 'react';

export default function ForkifySearchResultItem({ recipe }) {
	const { getRecipe } = useForkify();
	const recipeRef = useRef();

	function handleClick() {
		getRecipe(recipeRef.current.dataset.id);
	}

	function trimStringToLength(str, maxLength) {
		if (str.length > maxLength) {
			return str.slice(0, maxLength);
		}
		return str;
	}
	return (
		<li
			className={styles.preview}
			data-id={recipe.id}
			ref={recipeRef}
			onClick={handleClick}>
			<Link className={styles.preview__link} href='#'>
				<figure className={styles.preview__fig}>
					<Image src={recipe.image_url} alt='' fill={true} />
				</figure>
				<div className={styles.preview__data}>
					<h4 className={styles.preview__title}>
						{trimStringToLength(recipe.title, 25)}...
					</h4>
					<p className={styles.preview__publisher}>{recipe.publisher}</p>
				</div>
			</Link>
		</li>
	);
}
