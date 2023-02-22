import Link from 'next/link';
import { useRouter } from 'next/router';

const BlogCommentDetail = () => {
  const router = useRouter();
  const blogId = router.query.id;
  const commentId = router.query.commentId;
  return (
    <h2 className='m-auto font-bold'>
      Comment Detail of {commentId} of blog {blogId}
    </h2>
  );
};

export default BlogCommentDetail;
