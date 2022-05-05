import { EventList, Layout } from "../components";

import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <Layout>
      <EventList items={featuredEvents} />
    </Layout>
  );
}

export default HomePage;
