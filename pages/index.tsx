import { getProductsInCollection } from "../lib/shopify";

export default function Home() {
    return <h1 className="text-3xl">Hello from Shopify Next.js</h1>;
}

export async function getStaticProps() {
    const products = await getProductsInCollection();

    return {
        props: { products }, // will be passed to the page component as props
    };
}
