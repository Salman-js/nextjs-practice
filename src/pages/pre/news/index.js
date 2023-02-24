import Link from 'next/link';

function NewsList({ news }) {
  return (
    <>
      <p className='text-2xl font-bold'>List of News</p>
      {news.map((article, index) => {
        return (
          <h2 className='text-lg font-bold' key={article.id}>
            <Link href={`/pre/news/${article.id}`} passHref>
              {article.title}
            </Link>
            &nbsp; &nbsp; |&nbsp; &nbsp;
            <Link
              key={article.id}
              href={`/pre/news/category/${article.category}`}
              passHref
            >
              {article.category}
            </Link>
          </h2>
        );
      })}
    </>
  );
}

export default NewsList;
export async function getServerSideProps() {
  const response = await fetch('http://localhost:4000/articles');
  const data = await response.json();
  return {
    props: { news: data },
  };
}
