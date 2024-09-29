import { CardProps } from '@/components/Card/types';
import { api } from '@/store/api/api.ts';

const shopRtk = api.injectEndpoints({
    endpoints: (build) => ({
        getProduct: build.query<CardProps[], void>({
            query: () => ({
                url: `https://fakestoreapi.com/products`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetProductQuery } = shopRtk;
