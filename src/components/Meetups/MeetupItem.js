import React, { useContext } from 'react';

import Card from '../UI/Card';

import FavoritesContext from '../../store/favorites-context';

import styles from './MeetupItem.module.css';

function MeetupItem({ id, title, address, description, image }) {
	const { addFavorite, removeFavorite, itemIsFavorite } =
		useContext(FavoritesContext);

	const isFavorite = itemIsFavorite(id);

	function toggleFavoritesStatusHandler() {
		if (isFavorite) {
			removeFavorite(id);
		} else {
			addFavorite({ id, title, address, description, image });
		}
	}

	return (
		<Card>
			<li className={styles.item}>
				<div className={styles.image}>
					<img src={image} alt={title} />
				</div>
				<div className={styles.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={styles.actions}>
					<button
						className='btn'
						onClick={toggleFavoritesStatusHandler}>
						{isFavorite ? 'Remove from Favorites' : 'To Favorites'}
					</button>
				</div>
			</li>
		</Card>
	);
}

export default MeetupItem;
