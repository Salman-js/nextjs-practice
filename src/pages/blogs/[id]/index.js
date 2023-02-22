import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <Link href={`/blogs/${id}/comments`}>
      <h2 className='m-auto font-bold'>Comments of blog {id}</h2>
    </Link>
  );
};

export default BlogDetail;
