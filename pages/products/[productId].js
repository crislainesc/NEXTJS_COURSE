import {Fragment} from 'react';
import path from 'path';
import fs from 'fs/promises';

function ProductDetailPage({title, description}) {
   return (
      <Fragment>
         <h1>{title}</h1>
         <p>{description}</p>
      </Fragment>
   );
}

export async function getData() {
   const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
   const jsonData = await fs.readFile(filePath);
   const data = JSON.parse(jsonData);

   return data;
}

export async function getStaticProps({params}) {
   const productId = params.productId;

   const data = await getData();

   const product = data.products.find((product) => product.id === productId);

   if (!product) {
      return {notFound: true};
   }

   return {
      props: {title: product.title, description: product.description},
   };
}

export async function getStaticPaths() {
   const data = getData();

   const ids = data.products.map((product) => product.id);

   const params = id.map((id) => ({params: {productId: id}}));

   return {
      paths: params,
      fallback: 'blocking',
   };
}

export default ProductDetailPage;
