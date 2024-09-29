import { createSlice } from '@reduxjs/toolkit';

import { Theme } from '@/types/theme';

export interface ThemeStore {
    theme: Theme;
}

const initialState: ThemeStore = {
    theme: 'light',
};

export const themeSlice = createSlice({
    initialState,
    name: 'theme',
    reducers: {
        setTheme: (state, { payload }: { payload: Theme }) => {
            state.theme = payload;
        },
    },
});

export default themeSlice.reducer;
export const { ...themeActions } = themeSlice.actions;
