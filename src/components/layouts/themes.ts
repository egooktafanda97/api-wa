import {createTheme, Theme} from '@mui/material/styles';

// assets
import colors from '@/assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent themes style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

interface ThemeOption {
    colors: any; // adjust the type as per your `colors` module
    heading: string;
    paper: string;
    backgroundDefault: string;
    background: string;
    darkTextPrimary: string;
    darkTextSecondary: string;
    textDark: string;
    menuSelected: string;
    menuSelectedBack: string;
    divider: string;
    customization: any; // adjust the type as per your `customization` module
}

interface ThemeOptions {
    direction: 'ltr' | 'rtl';
    palette: any; // adjust the type as per your `themes` module
    mixins: {
        toolbar: {
            minHeight: string;
            padding: string;
            '@media (min-width: 600px)': {
                minHeight: string;
            };
        };
    };
    typography: any; // adjust the type as per your `typography` module
}

const themes = (customization: any): Theme => {
    const color = colors;

    const themeOption: ThemeOption = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization,
    };

    const themeOptions: ThemeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px',
                },
            },
        },
        typography: themeTypography(themeOption),
    };

    const themes: Theme = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default themes;
