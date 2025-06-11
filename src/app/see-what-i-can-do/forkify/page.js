'use client';
import ForkifyContainer from './forkify-container';
import ForkifyHeader from './header/forkify-header';
import ForkifyLogo from './header/forkify-header-logo';
import ForkifyLikes from './header/forkify-likes';
import ForkifyRecipe from './recipe/forkify-recipe';
import ForkifySearch from './header/forkify-search';
import ForkifySearchResults from './results/forkify-search-results';
import ForkifyShoppingList from './shopping-list/forkify-shopping-list';
import { ForkifyProvider } from './data/forkify-context';

const placeholderRecipe = {
	publisher: 'My Baking Addiction',
	ingredients: [
		{
			quantity: 1,
			unit: '',
			description: 'tbsp. canola or olive oil',
		},
		{
			quantity: 0.5,
			unit: 'cup',
			description: 'chopped sweet onion',
		},
		{
			quantity: 3,
			unit: 'cups',
			description: 'diced fresh red yellow and green bell peppers',
		},
		{
			quantity: 1,
			unit: '',
			description: 'tube refrigerated pizza dough',
		},
		{
			quantity: 0.5,
			unit: 'cup',
			description: 'salsa',
		},
		{
			quantity: 2,
			unit: 'cups',
			description: 'sargento chefstyle shredded pepper jack cheese',
		},
		{
			quantity: null,
			unit: '',
			description: 'Chopped cilantro or dried oregano',
		},
	],
	source_url:
		'http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/',
	image_url: 'http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg',
	title: 'Spicy Chicken and Pepper Jack Pizza',
	servings: 4,
	cooking_time: 45,
	id: '5ed6604591c37cdc054bc886',
};

export default function Page() {
	return (
		<div className='forkify-container'>
			<ForkifyProvider>
				<ForkifyHeader>
					<ForkifyLogo />
					<ForkifySearch />
					<ForkifyLikes />
				</ForkifyHeader>
				<ForkifyContainer>
					<ForkifySearchResults />
					<ForkifyRecipe recipe={placeholderRecipe} />
					<ForkifyShoppingList />
				</ForkifyContainer>
			</ForkifyProvider>
		</div>
	);
}
