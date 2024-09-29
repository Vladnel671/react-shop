import { useMemo } from 'react';

export const useThemes = () => {
    return useMemo(() => {
        return [
            { value: 'dark', label: 'Dark' },
            { value: 'light', label: 'Light' },
        ];
    }, []);
};
