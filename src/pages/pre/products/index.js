import Link from 'next/link';

function ProductsList({ products }) {
  return (
    <>
      <p className='text-2xl font-bold'>List of Products</p>
      {products.map((product, index) => {
        return (
          <Link key={product.id} href={`/pre/products/${product.id}`} passHref>
            <h2 className='text-lg font-bold'>{product.title}</h2>
          </Link>
        );
      })}
    </>
  );
}

export default ProductsList;
export async function getStaticProps() {
  const response = await fetch('http://localhost:4000/products');
  const data = await response.json();
  return {
    props: { products: data.slice(0, 3) },
    revalidate: 10,
  };
}
