import Link from 'next/link';
import React from 'react';

const Blog = () => {
  return (
    <>
      <Link href='/blogs/1'>
        <h2 className='m-auto font-bold'>Blog 1</h2>
      </Link>
      <Link href='/blogs/2'>
        <h2 className='m-auto font-bold'>Blog 2</h2>
      </Link>
      <Link href='/blogs/3'>
        <h2 className='m-auto font-bold'>Blog 3</h2>
      </Link>
    </>
  );
};

export default Blog;
