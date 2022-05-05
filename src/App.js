import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Layout } from './components';

import { AllMeetups, Favorites, NewMeetup } from './pages';

function App() {
	return (
			<Layout>
				<Switch>
					<Route path='/' exact>
						<AllMeetups />
					</Route>
					<Route path='/new-meetup'>
						<NewMeetup />
					</Route>
					<Route path='/favorites'>
						<Favorites />
					</Route>
				</Switch>
			</Layout>
	);
}

export default App;
