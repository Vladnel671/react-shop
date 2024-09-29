import { RouterProvider } from 'react-router-dom';

import { Providers } from '@/components/Providers';
import { router } from '@/constants/router.tsx';

export const App = () => (
    <Providers>
        <RouterProvider router={router} />
    </Providers>
);
