import Link from 'next/link';

function PostsList({ posts }) {
  return (
    <>
      <p className='text-2xl font-bold'>List of Posts</p>
      {posts.map((post, index) => {
        return (
          <Link key={post.id} href={`/pre/posts/${post.id}`} passHref>
            <h2 className='text-lg font-bold'>{post.title}</h2>
          </Link>
        );
      })}
    </>
  );
}

export default PostsList;
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return {
    props: { posts: data.slice(0, 3) },
  };
}
