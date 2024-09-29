import { useGetProductQuery } from '@/store/api/shop.rtk';
import { ProductItem, Wrapper } from './styles';
import { Card } from '../Card';

export const ProductList = () => {
    const { data, isSuccess, isError } = useGetProductQuery();

    return (
        <Wrapper>
            {isSuccess &&
                data.map((product: any) => (
                    <ProductItem key={product.id}>
                        <Card image={product.image} title={product.title} />
                    </ProductItem>
                ))}
            {isError && <div>Ошибка при загрузке данных</div>}
        </Wrapper>
    );
};
