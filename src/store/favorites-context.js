import { createContext, useState } from 'react';

const FavoritesContext = createContext({
	favorites: [],
	totalFavorites: 0,
	addFavorite: (meetupData) => {},
	removeFavorite: (meetupId) => {},
	itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
	const [userFavorites, setUserFavorites] = useState([]);

	function addFavoriteHandler(meetupData) {
		setUserFavorites((prevFavorites) => [...prevFavorites, meetupData]);
	}

	function removeFavoriteHandler(meetupId) {
		setUserFavorites((prevFavorites) =>
			prevFavorites.filter((favorite) => favorite.id !== meetupId)
		);
	}

	function itemIsFavoriteHandler(meetupId) {
		return userFavorites.some((favorite) => favorite.id === meetupId);
	}

	const context = {
		favorites: userFavorites,
		totalFavorites: userFavorites.length,
		addFavorite: addFavoriteHandler,
		removeFavorite: removeFavoriteHandler,
		itemIsFavorite: itemIsFavoriteHandler,
	};

	return (
		<FavoritesContext.Provider value={context}>
			{children}
		</FavoritesContext.Provider>
	);
}

export default FavoritesContext;
