import styles from './forkify-search-result-item.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ForkifySearchResultItem({ recipe }) {
	return (
		<li className={styles.preview}>
			<Link className={styles.preview__link} href='#'>
				<figure className={styles.preview__fig}>
					<Image src={recipe.image_url} alt='' fill={true} />
				</figure>
				<div className={styles.preview__data}>
					<h4 className={styles.preview__title}>{recipe.title}</h4>
					<p className={styles.preview__publisher}>{recipe.publisher}</p>
				</div>
			</Link>
		</li>
	);
}
