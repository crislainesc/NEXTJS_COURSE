import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import FavoritesContext from '../../store/favorites-context';

import styles from './MainNavigation.module.css';

function MainNavigation() {
	const { totalFavorites } = useContext(FavoritesContext);

	return (
		<header className={styles.header}>
			<div className={styles.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to='/'>All Meetups</Link>
					</li>
					<li>
						<Link to='/new-meetup'>New Meetup</Link>
					</li>
					<li>
						<Link to='/favorites'>Favorites</Link>
						<span className={styles.badge}>{totalFavorites}</span>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
