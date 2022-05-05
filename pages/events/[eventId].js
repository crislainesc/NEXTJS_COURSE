import { useRouter } from "next/router";

import {
  EventSummary,
  EventLogistics,
  EventContent,
  Layout,
  ErrorAlert,
} from "../../components";

import { getEventById } from "../../dummy-data";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;

  const event = getEventById(eventId);

  if (!event) {
    return (
      <Layout>
        <ErrorAlert>
          <p>No event found!</p>
        </ErrorAlert>
      </Layout>
    );
  }

  return (
    <Layout>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Layout>
  );
}

export default EventDetailPage;
