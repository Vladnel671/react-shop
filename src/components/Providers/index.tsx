import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import { ProvidersProps } from './types.ts';

import { darkTheme, lightTheme } from '@/constants/theme.ts';
import { useAppSelector } from '@/hooks/redux-hooks.ts';
import { persistor, store } from '@/store';

const ThemeProviders = ({ children }: ProvidersProps) => {
    const theme = useAppSelector((state) => state.theme.theme);

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            {children}
        </ThemeProvider>
    );
};

export const Providers = ({ children }: ProvidersProps) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProviders>{children}</ThemeProviders>
        </PersistGate>
    </Provider>
);
