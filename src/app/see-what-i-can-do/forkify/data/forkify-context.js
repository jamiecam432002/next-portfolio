'use client';

import { createContext, useContext, useReducer } from 'react';
const API_URL = 'https://forkify-api.jonas.io/api/v2/recipes';
const API_KEY = 'faa53b3f-37c1-4a7a-88cf-aea91fb12af1';
const ForkifyContext = createContext();
const initialState = {
	query: '',
	searchResults: [],
	recipe: null,
	isLoading: false,
};

function reducer(state, action) {
	switch (action.type) {
		case 'loading':
			return {
				...state,
				isLoading: true,
			};
		case 'search/resultsloaded':
			return {
				...state,
				isLoading: false,
				searchResults: [...action.payload],
			};
		default:
			return state;
	}
}

function ForkifyProvider({ children }) {
	const [{ query, searchResults, recipe, isLoading }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const getRecipes = async function (query) {
		dispatch({ type: 'loading' });
		try {
			const res = await fetch(`${API_URL}?search=${query}&key=${API_KEY}`);
			const data = await res.json();
			dispatch({ type: 'search/resultsloaded', payload: data.data.recipes });
		} catch (err) {
			throw new Error('problem fetching recipes');
		}
	};

	const getRecipe = async function () {};

	return (
		<ForkifyContext.Provider
			value={{
				query,
				searchResults,
				recipe,
				getRecipes,
				getRecipe,
				isLoading,
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
