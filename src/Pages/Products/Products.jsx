import { useQuery } from '@tanstack/react-query';
import ProductsOtpion from './ProductsOtpion';

const Products = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='mt-16 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                products.map(product => <ProductsOtpion
                    key={product._id}
                    product={product}
                >
                </ProductsOtpion>)
            }
        </div>
    );
};

export default Products;