// stores/themeStore.js
import { writable } from 'svelte/store';

const localStorageKey = 'theme';

function createThemeStore() {
	// Check if localStorage is available (client-side)
	const storedTheme =
		typeof localStorage !== 'undefined' ? localStorage.getItem(localStorageKey) : 'light';

	// Provide a default value if the stored value is null
	const initialTheme = storedTheme !== null ? storedTheme : 'light';

	const theme = writable(initialTheme);

	// Subscribe to changes and update localStorage
	theme.subscribe(($theme) => {
		if (typeof localStorage !== 'undefined') {
			localStorage.setItem(localStorageKey, $theme);
		}
	});

	return theme;
}

export const theme = createThemeStore();
