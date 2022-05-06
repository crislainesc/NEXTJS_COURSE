import {Fragment} from 'react';

import {getEventById, getFeaturedEvents} from '../../helpers/api-util';

import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';

function EventDetailPage({selectedEvent}) {


    if (!selectedEvent) {
        return (
            <div className='center'>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <Fragment>
            <EventSummary title={selectedEvent.title} />
            <EventLogistics
                date={selectedEvent.date}
                address={selectedEvent.location}
                image={selectedEvent.image}
                imageAlt={selectedEvent.title}
            />
            <EventContent>
                <p>{selectedEvent.description}</p>
            </EventContent>
        </Fragment>
    );
}

export async function getStaticProps({params}) {
    const eventId = params.eventId;

    const event = await getEventById(eventId);

    return {
        props: {selectedEvent: event},
        revalidate: 30
    };
}

export async function getStaticPaths() {
    const events = await getFeaturedEvents();

    const eventsPaths = events.map((event) => ({
        params: {eventId: event.id.toString()},
    }));

    return {
        paths: eventsPaths,
        fallback: 'blocking',
    };
}

export default EventDetailPage;
