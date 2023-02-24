import { useRouter } from 'next/router';

const Product = ({ product }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h2 className='m-auto font-bold'>Loading...</h2>;
  }
  return (
    <>
      <h2 className='m-auto font-bold'>{product.title}</h2>
      <h4 className='m-auto'>{product.price}</h4>
    </>
  );
};

export default Product;
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
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: true, //true: displays fallback page like Loading while the page is prerendered, false: displays 404 page if the path is not defined in the paths array, blocking: displays nothing while the page is prerendered
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(`http://localhost:4000/products/${params.id}`);
  const data = await response.json();
  return {
    props: { product: data },
    revalidate: 10,
  };
}
