import { comments } from '@/data/comments';

function Comment({ comment }) {
  return (
    <>
      <p className='text-2xl font-bold'>Comment {comment.id}</p>
      <p className='text-xl'>{comment.comment}</p>
    </>
  );
}

export default Comment;
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true, //true: displays fallback page like Loading while the page is prerendered, false: displays 404 page if the path is not defined in the paths array, blocking: displays nothing while the page is prerendered
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  /* const response = await fetch(
    `http://localhost:3000/api/comments/${params.id}`
  );
  const data = await response.json(); */
  const comment = comments.find(
    (comment) => comment.id === parseInt(params.id)
  );
  return {
    props: { comment },
    revalidate: 10,
  };
}
