'use client';

import { createContext, useContext, useReducer } from 'react';
const API_URL = 'https://forkify-api.jonas.io/api/v2/recipes';
const API_KEY = 'faa53b3f-37c1-4a7a-88cf-aea91fb12af1';
const ForkifyContext = createContext();
const initialState = {
	query: '',
	searchResults: [],
	recipe: null,
	searchIsLoading: false,
	recipeIsLoading: false,
	bookmarks: [],
};

function reducer(state, action) {
	switch (action.type) {
		case 'bookmarkRecipe':
			return {
				...state,
				bookmarks: [...state.bookmarks, action.payload],
			};
		case 'searchloading':
			return {
				...state,
				searchIsLoading: true,
			};
		case 'recipeloading':
			return {
				...state,
				recipeIsLoading: true,
			};
		case 'search/resultsloaded':
			return {
				...state,
				searchIsLoading: false,
				searchResults: [...action.payload],
			};
		case 'recipe/loaded':
			return {
				...state,
				recipeIsLoading: false,
				recipe: { ...action.payload },
			};
		default:
			return state;
	}
}

function ForkifyProvider({ children }) {
	const [
		{
			query,
			searchResults,
			recipe,
			searchIsLoading,
			recipeIsLoading,
			bookmarks,
		},
		dispatch,
	] = useReducer(reducer, initialState);

	const getRecipes = async function (query) {
		dispatch({ type: 'searchloading' });
		try {
			const res = await fetch(`${API_URL}?search=${query}&key=${API_KEY}`);
			const data = await res.json();
			dispatch({ type: 'search/resultsloaded', payload: data.data.recipes });
		} catch (err) {
			throw new Error('problem fetching recipes');
		}
	};

	const getRecipe = async function (recipeId) {
		if (recipe && recipeId === recipe.id) return;
		dispatch({ type: 'recipeloading' });
		try {
			const res = await fetch(`${API_URL}/${recipeId}?key=${API_KEY}`);
			const data = await res.json();
			dispatch({ type: 'recipe/loaded', payload: data.data.recipe });
		} catch (err) {
			throw new Error('problem fetching recipes');
		}
	};

	const addBookmark = async function (recipe) {
		dispatch({ type: 'bookmarkRecipe', payload: recipe });
		//console.log(recipe);
	};

	return (
		<ForkifyContext.Provider
			value={{
				query,
				searchResults,
				recipe,
				getRecipes,
				getRecipe,
				searchIsLoading,
				recipeIsLoading,
				bookmarks,
				addBookmark,
			}}>
			{children}
		</ForkifyContext.Provider>
	);
}

function useForkify() {
	const context = useContext(ForkifyContext);
	if (context === undefined) {
		throw new Error('This context was used outside of its provider');
	}
	return context;
}

export { ForkifyProvider, useForkify };
