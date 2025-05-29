import ForkifyContainer from './components/forkify-container';
import Header from './components/header';
import HeaderLogo from './components/header-logo';
import ForkifyLikes from './components/forkify-likes';
import Recipe from './components/recipe';
import Search from './components/search';
import SearchResults from './components/search-results';
import ShoppingList from './components/shopping-list';

export default function Page() {
	return (
		<div className='forkify-container'>
			<Header>
				<HeaderLogo />
				<Search />
				<ForkifyLikes />
			</Header>
			<ForkifyContainer>
				<SearchResults />
				<Recipe />
				<ShoppingList />
			</ForkifyContainer>
		</div>
	);
}
