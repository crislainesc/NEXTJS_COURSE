import React from 'react';
import MeetupItem from './MeetupItem';

import styles from './MeetupList.module.css';

function MeetupList({ meetups }) {
	return (
		<ul className={styles.list}>
			{meetups.map((meetup) => (
				<MeetupItem
					key={meetup.id}
					id={meetup.id}
					title={meetup.title}
					address={meetup.address}
               description={meetup.description}
               image={meetup.image}
				/>
			))}
		</ul>
	);
}

export default MeetupList;
