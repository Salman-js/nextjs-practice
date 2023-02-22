import { useRouter } from 'next/router';

const DocDetail = () => {
  const router = useRouter();
  const { params = [] } = router.query; //empty array at initialization to avoid runtime error during prerender
  if (params.length === 2) {
    return (
      <h2 className='m-auto font-bold'>
        Docs for feature {params[0]} Concept {params[1]}
      </h2>
    );
  } else if (params.length === 1) {
    return <h2 className='m-auto font-bold'>Docs for feature {params[0]}</h2>;
  }
  return (
    <>
      <h2 className='m-auto font-bold'>Docs Home Page</h2>
      <button onClick={() => router.push('/blogs')}>Blogs</button>
    </>
  );
};

export default DocDetail;
