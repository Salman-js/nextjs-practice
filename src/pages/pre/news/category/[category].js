import Link from 'next/link';

function NewsByCat({ news, category }) {
  return (
    <>
      <p className='text-2xl font-bold'>List of {category} News</p>
      {news.map((article) => {
        return (
          <Link key={article.id} href={`/pre/news/${article.id}`} passHref>
            <h2 className='text-lg font-bold'>{article.title}</h2>
          </Link>
        );
      })}
    </>
  );
}

export default NewsByCat;
export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  res.setHeader('Set-Cookie', ['name=Salman']);
  const response = await fetch(
    `http://localhost:4000/articles?category=${params.category}`
  );
  const data = await response.json();
  return {
    props: { news: data, category: params.category },
  };
}
