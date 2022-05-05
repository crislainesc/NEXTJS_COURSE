import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";

import { EventList, EventsSearch, Layout } from "../../components";

function AllEventsPage() {
  const allEvents = getAllEvents();

  const router = useRouter();

  function searchEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Layout>
      <EventsSearch onSearch={searchEventHandler} />
      <EventList items={allEvents} />
    </Layout>
  );
}

export default AllEventsPage;
