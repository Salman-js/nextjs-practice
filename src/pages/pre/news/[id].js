import { useRouter } from 'next/router';

const Article = ({ article }) => {
  return (
    <>
      <p className='text-2xl m-auto font-bold'>{article.title}</p>
      <p className='text-xl m-auto'>{article.detail}</p>
      <p className='text-lg m-auto'>{article.category}</p>
    </>
  );
};

export default Article;
export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/articles/${params.id}`);
  const data = await response.json();
  return {
    props: { article: data },
  };
}
