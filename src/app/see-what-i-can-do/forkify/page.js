'use client';
import ForkifyContainer from './forkify-container';
import ForkifyHeader from './header/forkify-header';
import ForkifyLogo from './header/forkify-header-logo';
import ForkifyLikes from './header/forkify-likes';
import ForkifyRecipe from './recipe/forkify-recipe';
import ForkifySearch from './header/forkify-search';
import ForkifySearchResults from './results/forkify-search-results';
import { ForkifyProvider } from './data/forkify-context';

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
					<ForkifyRecipe />
				</ForkifyContainer>
			</ForkifyProvider>
		</div>
	);
}
