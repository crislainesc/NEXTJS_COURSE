import { useRouter } from "next/router";

import { Layout, EventList, ResultsTitle, ErrorAlert } from "../../components";

import { getFilteredEvents } from "../../dummy-data";

function FilteredEventsPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  // filteredData he can return undefined so it is important to pay attention to the order of
  // execution when using slugs

  if (!filterData) {
    return (
      <Layout>
        <p className="center">Loading...</p>
      </Layout>
    );
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <Layout>
        <ErrorAlert>
          <ResultsTitle date={date} />
          <p className="center">Invalid Filter. Please adjust your values.</p>
        </ErrorAlert>
      </Layout>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Layout>
        <ErrorAlert>
          <p className="center">No events found for then chosen filter</p>
        </ErrorAlert>
        <ResultsTitle date={date} />
      </Layout>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <Layout>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />|
    </Layout>
  );
}

export default FilteredEventsPage;
