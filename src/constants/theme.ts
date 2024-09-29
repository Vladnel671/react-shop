import { colors } from './colors';
import { FontSizes } from './font-sizes';
import { Media } from './media.ts';

export const lightTheme = {
    media: Media,
    text: {
        title: colors.black,
        button: colors.white,
        label: colors.blue,
        activeLink: colors.gray,
        text: colors.black,
    },
    bg: {
        header: colors.gray,
        button: colors.blue,
        application: colors.white,
        opacity: colors.blueOpacity,
    },
    border: {
        select: colors.borderGray,
        checkbox: colors.black,
        input: colors.gray,
        focused: colors.blue,
        link: colors.white,
    },
    fontSizes: FontSizes,
    shadow: {
        black: colors.black,
    },
};

export type Theme = typeof lightTheme;

export const darkTheme: Theme = {
    media: Media,
    text: {
        title: colors.black,
        button: colors.white,
        label: colors.white,
        activeLink: colors.gray,
        text: colors.white,
    },
    bg: {
        header: colors.gray,
        button: colors.blue,
        application: colors.lightBlue,
        opacity: colors.blueOpacity,
    },
    border: {
        select: colors.white,
        checkbox: colors.white,
        input: colors.gray,
        focused: colors.blue,
        link: colors.white,
    },
    fontSizes: FontSizes,
    shadow: {
        black: colors.black,
    },
};
