import { useQuery } from '@tanstack/react-query';
import ProductsOtpion from './ProductsOtpion';
import "../../Shared/css/style.css"

const Products = () => {

    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://resale-website-server-ten.vercel.app/products');
            const data = await res.json();
            return data;
        }
    })


    return (
        <div className='lg:p-6 rounded-lg products-image'>
            <h1 className=' mt-10 text-center text-4xl font-bold text-black'>All Luxury Car Categories are here :</h1>
            <div className=' mt-16 lg:ml-10 md:ml-10 grid my-2 grid-cols-1  md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4' data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                {
                    products.map(product => <ProductsOtpion
                        key={product._id}
                        product={product}
                    >
                    </ProductsOtpion>)
                }
            </div>
        </div>
    );
};

export default Products;