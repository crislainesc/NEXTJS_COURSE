import React from 'react';
import { useHistory } from 'react-router-dom';

import { NewMeetupForm } from '../components';

function NewMeetup() {
	const history = useHistory();

	function addMeetupHandler(meetupData) {
		fetch('https://react-http-75081-default-rtdb.firebaseio.com/meetups.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(meetupData),
		})
			.then(() => {
				history.replace('/');
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMeetupHandler} />
		</section>
	);
}

export default NewMeetup;
