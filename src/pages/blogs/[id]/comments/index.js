import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const CommentsList = () => {
  const router = useRouter();
  const blogId = router.query.id;
  return (
    <>
      <Link href={`/blogs/${blogId}/comments/1`}>
        <h2 className='m-auto font-bold'>Comment 1 of blog {blogId}</h2>
      </Link>
      <Link href={`/blogs/${blogId}/comments/2`}>
        <h2 className='m-auto font-bold'>Comment 2 of blog {blogId}</h2>
      </Link>
      <Link href={`/blogs/${blogId}/comments/3`}>
        <h2 className='m-auto font-bold'>Comment 3 of blog {blogId}</h2>
      </Link>
    </>
  );
};

export default CommentsList;
