import { useRouter } from 'next/router';
import React from 'react';

const BlogInstructions = () => {
  const router = useRouter();
  return (
    <>
      <h2 className='m-auto font-bold'>Blog instructions</h2>
      <button onClick={() => router.push('/blogs')}>Blogs</button>
    </>
  );
};

export default BlogInstructions;
