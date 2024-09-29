import { createBrowserRouter, Outlet } from 'react-router-dom';

import { Urls } from '@/constants/urls.ts';
import { Header } from '@/components/Header';
import { Main } from '@/pages/Main';

import { Wrapper } from '@/styles.ts';

export const router = createBrowserRouter([
    {
        element: (
            <Wrapper>
                <Header />
                <Outlet />
            </Wrapper>
        ),

        children: [
            {
                path: Urls.main,
                element: <Main />,
            },
        ],
    },
]);
