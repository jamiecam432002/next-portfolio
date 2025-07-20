import styles from './forkify-recipe.module.css';
import Button from '../ui/button';
import HeartOutlined from '@/public/images/forkify/icons/icon-heart-outlined.svg';
import IconMan from '@/public/images/forkify/icons/icon-man.svg';
import IconWatch from '@/public/images/forkify/icons/icon-stopwatch.svg';
import Image from 'next/image';
import ForkifyRecipeIngredients from './forkify-recipe-ingredients';
import ForkifyRecipeDirections from './forkify-recipe-directions';
import { useForkify } from '../data/forkify-context';
import Spinner from '../ui/spinner';

export default function ForkifyRecipe() {
	const { recipe, recipeIsLoading, addBookmark } = useForkify();

	function handleBookmark() {
		addBookmark(recipe.id);
	}

	return (
		<div className={styles.forkifyRecipeContainer}>
			{recipeIsLoading && <Spinner />}
			{recipe === null && recipeIsLoading === false && (
				<>
					<h2>Nothing Cooking</h2>
					<p className={styles.forkifyNothingCooking}>
						Use the search bar above to search from over 1 million recipes
						curated by the Food2Fork service.
					</p>
				</>
			)}
			{recipe !== null && recipeIsLoading === false && (
				<div className={styles.forkifyRecipe}>
					<figure className={styles.forkifyRecipe__preview}>
						<Image
							alt='placeholder recipe image'
							src={recipe.image_url}
							width={250}
							height={250}
						/>
						<h1 className={styles.forkifyRecipe__title}>
							<span>{recipe.title}</span>
						</h1>
					</figure>
					<div className={styles.forkifyRecipe__details}>
						<div>
							<div className={styles.forkifyRecipe__info}>
								<IconWatch />
								<span className={styles.forkifyRecipe__infodata}>
									{recipe.cooking_time}
								</span>
								<span>minutes</span>
							</div>
							<div className={styles.forkifyRecipe__info}>
								<IconMan />
								<span className={styles.forkifyRecipe__infodata}>
									{recipe.servings}
								</span>
								<span>servings</span>
							</div>
						</div>
						<Button type='love' onClick={addBookmark}>
							<HeartOutlined />
						</Button>
					</div>
					<ForkifyRecipeIngredients />
					<ForkifyRecipeDirections />
				</div>
			)}
		</div>
	);
}
