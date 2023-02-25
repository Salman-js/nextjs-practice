import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';

function EventsList({ eventsList }) {
  const router = useRouter();
  const [events, setEvents] = useState(eventsList);
  const fetcher = async (filterType, filterData) => {
    const response = await fetch(
      `http://localhost:4000/events?${filterType && filterType}=${
        filterData && filterData
      }`
    );
    const data = await response.json();
    setEvents(data);
    router.push(`/events${filterType && '?' + filterType + '=' + filterData}`);
  };
  return (
    <>
      <p className='text-2xl font-bold'>List of Events</p>
      <button onClick={() => fetcher('category', 'sport')}>Sport</button> |{' '}
      <button onClick={() => fetcher('category', 'convention')}>
        Convention
      </button>{' '}
      | <button onClick={() => fetcher('category', 'concert')}>Concert</button>{' '}
      | <button onClick={() => fetcher('price', 'free')}>Free</button> |{' '}
      <button onClick={() => fetcher('', '')}>Reset</button>
      {events.map((event, index) => {
        return (
          <h2 className='text-lg font-bold' key={event.id}>
            <Link href={`/pre/events/${event.id}`} passHref>
              {event.name}
            </Link>
            &nbsp; &nbsp; |&nbsp; &nbsp;
            {event.price}
          </h2>
        );
      })}
    </>
  );
}

export default EventsList;
export async function getServerSideProps(context) {
  const { query } = context;
  const { category, price } = query;
  console.log(query);
  const queryString = category
    ? `category=${category}`
    : price
    ? `price=${price}`
    : '';
  const response = await fetch(
    `http://localhost:4000/events${queryString && '?' + queryString}`
  );
  const data = await response.json();
  return {
    props: { eventsList: data },
  };
}
