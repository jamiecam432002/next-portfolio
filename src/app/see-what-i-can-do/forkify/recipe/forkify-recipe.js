import styles from './forkify-recipe.module.css';
import Button from '../ui/button';
import HeartOutlined from '@/public/images/forkify/icons/icon-heart-outlined.svg';
import IconMan from '@/public/images/forkify/icons/icon-man.svg';
import IconWatch from '@/public/images/forkify/icons/icon-stopwatch.svg';
import IconCircleMinus from '@/public/images/forkify/icons/icon-circle-with-minus.svg';
import IconCirclePlus from '@/public/images/forkify/icons/icon-circle-with-plus.svg';
import Image from 'next/image';
import ForkifyRecipeIngredients from './forkify-recipe-ingredients';
import ForkifyRecipeDirections from './forkify-recipe-directions';

export default function ForkifyRecipe({ recipe }) {
	const { image_url, title, servings, cooking_time } = recipe;
	return (
		<div className={styles.forkifyRecipeContainer}>
			<h2>Nothing Cooking</h2>
			<p className={styles.forkifyNothingCooking}>
				Use the search bar above to search from over 1 million recipes curated
				by the Food2Fork service.
			</p>
			<div className={styles.forkifyRecipe}>
				<figure className={styles.forkifyRecipe__preview}>
					<Image
						alt='placeholder recipe image'
						src={image_url}
						width={250}
						height={250}
					/>
					<h1 className={styles.forkifyRecipe__title}>
						<span>{title}</span>
					</h1>
				</figure>
				<div className={styles.forkifyRecipe__details}>
					<div>
						<div className={styles.forkifyRecipe__info}>
							<IconWatch />
							<span className={styles.forkifyRecipe__infodata}>
								{cooking_time}
							</span>
							<span>minutes</span>
						</div>
						<div className={styles.forkifyRecipe__info}>
							<IconMan />
							<span className={styles.forkifyRecipe__infodata}>{servings}</span>
							<span>servings</span>
							<div className={styles.forkifyRecipe__infobuttons}>
								<Button type='tiny' className='btn-tiny'>
									<IconCircleMinus />
								</Button>
								<Button type='tiny' className='btn-tiny'>
									<IconCirclePlus />
								</Button>
							</div>
						</div>
					</div>
					<Button type='love'>
						<HeartOutlined />
					</Button>
				</div>
				<ForkifyRecipeIngredients />
				<ForkifyRecipeDirections />
			</div>
		</div>
	);
}
