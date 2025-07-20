import HeartIcon from '@/public/images/forkify/icons/icon-heart.svg';
import styles from './forkify-likes.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { useForkify } from '../data/forkify-context';
import { useRef } from 'react';

const placeholderRecipe1 = {
	title: 'Crab Pasta and Tomato Sauce',
	publisher: 'PBS Food',
	image_url: 'http://forkify-api.herokuapp.com/images/24619627a5.jpg',
	id: '664c8f193e7aa067e94e886e',
};
const placeholderRecipe2 = {
	title: 'Pasta with Whiskey, Wine...',
	publisher: 'The Pioneer Woman',
	image_url: 'http://forkify-api.herokuapp.com/images/317051ed90.jpg',
	id: '664c8f193e7aa067e94e8677',
};

function trimStringToLength(str, maxLength) {
	if (str.length > maxLength) {
		return str.slice(0, maxLength);
	}
	return str;
}
export default function ForkifyLikes() {
	const { getRecipe, recipe } = useForkify();
	const recipeRef = useRef();

	function handleClick() {
		getRecipe(recipeRef.current.dataset.id);
	}

	return (
		<div className={styles.forkify__likes}>
			<HeartIcon />
			{recipe !== null && (
				<div className={styles.forkify__likes__list}>
					<ul className={styles.search__results}>
						<li
							className={styles.preview}
							data-id={placeholderRecipe1.id}
							ref={recipeRef}
							onClick={handleClick}>
							<Link className={styles.preview__link} href='#'>
								<figure className={styles.preview__fig}>
									<Image
										src={placeholderRecipe1.image_url}
										alt=''
										fill={true}
									/>
								</figure>
								<div className={styles.preview__data}>
									<h4 className={styles.preview__title}>
										{trimStringToLength(placeholderRecipe1.title, 25)}...
									</h4>
									<p className={styles.preview__publisher}>
										{placeholderRecipe1.publisher}
									</p>
								</div>
							</Link>
						</li>
						<li
							className={styles.preview}
							data-id={placeholderRecipe2.id}
							ref={recipeRef}
							onClick={handleClick}>
							<Link className={styles.preview__link} href='#'>
								<figure className={styles.preview__fig}>
									<Image
										src={placeholderRecipe2.image_url}
										alt=''
										fill={true}
									/>
								</figure>
								<div className={styles.preview__data}>
									<h4 className={styles.preview__title}>
										{trimStringToLength(placeholderRecipe2.title, 25)}...
									</h4>
									<p className={styles.preview__publisher}>
										{placeholderRecipe2.publisher}
									</p>
								</div>
							</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
}
