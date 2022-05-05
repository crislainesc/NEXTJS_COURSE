import React, { useContext } from 'react';

import { MeetupList } from '../components';

import FavoritesContext from '../store/favorites-context';

function Favorites() {
	const { favorites, totalFavorites } = useContext(FavoritesContext);

	let content;

	if (totalFavorites === 0) {
		content = <h3>No favorites Added</h3>;
	} else {
		content = <MeetupList meetups={favorites} />;
	}

	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	);
}

export default Favorites;
