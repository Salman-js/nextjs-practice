import { useRouter } from 'next/router';

const Post = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2 className='m-auto font-bold'>Loading...</h2>;
  }
  return (
    <>
      <h2 className='m-auto font-bold'>{post.title}</h2>
      <h4 className='m-auto'>{post.body}</h4>
    </>
  );
};

export default Post;
/* export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  const paths = data.map((item, index) => {
    return {
      params: {
        id: `${item.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
} */
export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: true, //true: displays fallback page like Loading while the page is prerendered, false: displays 404 page if the path is not defined in the paths array, blocking: displays nothing while the page is prerendered
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = await response.json();
  return {
    props: { post: data },
  };
}
