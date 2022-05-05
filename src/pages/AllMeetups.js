import React, { useState, useEffect } from 'react';
import { MeetupList } from '../components';

function AllMeetups() {
	const [isLoading, setIsLoading] = useState(false);
	const [loadedMeetups, setLoadedMeetups] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://react-http-75081-default-rtdb.firebaseio.com/meetups.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};

					meetups.push(meetup);
				}

				setLoadedMeetups(meetups);
				setIsLoading(false);              
			})
			.catch((error) => console.log(error));
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<section>
			<h1>AllMeetups</h1>
			<MeetupList meetups={loadedMeetups} />
		</section>
	);
}

export default AllMeetups;
