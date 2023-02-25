import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

const fetcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard');
  const data = await response.json();
  return data;
};

const SWR = () => {
  const { data, error, isLoading } = useSWR('dashboard', fetcher);
  return (
    <>
      <p className='m-auto font-bold'>Dashboard</p>
      {isLoading ? (
        <p className='m-auto font-bold'>Loading...</p>
      ) : (
        <>
          <p className='m-auto'>Followers: {data.followers}</p>
          <p className='m-auto'>Likes: {data.likes}</p>
          <p className='m-auto'>Comments: {data.comments}</p>
        </>
      )}
    </>
  );
};

export default SWR;
