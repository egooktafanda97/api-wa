interface ThemeCustomization {
    fontFamily?: string;
    // Add other customization properties as needed
}

// interface Theme {
//     customization?: ThemeCustomization;
//     heading?: string;
//     textDark?: string;
//     darkTextSecondary?: string;
//     darkTextPrimary?: string;
// }

interface Typography {
    fontFamily?: string;
    h6?: any;
    h5?: any;
    h4?: any;
    h3?: any;
    h2?: any;
    h1?: any;
    subtitle1?: any;
    subtitle2?: any;
    caption?: any;
    body1?: any;
    body2?: any;
    button?: any;
    customInput?: any;
    mainContent?: any;
    menuCaption?: any;
    subMenuCaption?: any;
    commonAvatar?: any;
    smallAvatar?: any;
    mediumAvatar?: any;
    largeAvatar?: any;
}

//
// interface any {
//     fontWeight?: number;
//     color?: string;
//     fontSize?: string;
//     lineHeight?: string;
//     textTransform?: string;
//     marginTop?: string;
//     marginBottom?: string;
//     letterSpacing?: string;
//     '& > label'?: LabelStyle;
//     '& > div > input'?: InputStyle;
//     '& legend'?: LegendStyle;
//     '& fieldset'?: FieldsetStyle;
// }

interface LabelStyle {
    top?: string;
    left?: string;
    color?: string;
    '&[data-shrink="false"]'?: ShrinkStyle;
}

interface ShrinkStyle {
    top?: string;
}

interface InputStyle {
    padding?: string;
}

interface LegendStyle {
    display?: string;
}

interface FieldsetStyle {
    top?: string;
}

const themeTypography = (theme: any): Typography => {
    return {
        fontFamily: theme?.customization?.fontFamily,
        h6: {
            fontWeight: 500,
            color: theme.heading,
            fontSize: '0.75rem',
        },
        h5: {
            fontSize: '0.875rem',
            color: theme.heading,
            fontWeight: 500,
        },
        h4: {
            fontSize: '1rem',
            color: theme.heading,
            fontWeight: 600,
        },
        h3: {
            fontSize: '1.25rem',
            color: theme.heading,
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.5rem',
            color: theme.heading,
            fontWeight: 700,
        },
        h1: {
            fontSize: '2.125rem',
            color: theme.heading,
            fontWeight: 700,
        },
        subtitle1: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.textDark,
        },
        subtitle2: {
            fontSize: '0.75rem',
            fontWeight: 400,
            color: theme.darkTextSecondary,
        },
        caption: {
            fontSize: '0.75rem',
            color: theme.darkTextSecondary,
            fontWeight: 400,
        },
        body1: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: '1.334em',
        },
        body2: {
            letterSpacing: '0em',
            fontWeight: 400,
            lineHeight: '1.5em',
            color: theme.darkTextPrimary,
        },
        button: {
            textTransform: 'capitalize',
        },
        customInput: {
            marginTop: '1',
            marginBottom: '1',
            '& > label': {
                top: '23',
                left: '0',
                color: theme.darkTextSecondary,
                '&[data-shrink="false"]': {
                    top: '5',
                },
            },
            '& > div > input': {
                padding: '30.5px 14px 11.5px !important',
            },
            '& legend': {
                display: 'none',
            },
            '& fieldset': {
                top: '0',
            },
        },
        mainContent: {
            backgroundColor: theme.background,
            width: '100%',
            minHeight: 'calc(100vh - 88px)',
            flexGrow: 1,
            padding: '20px',
            marginTop: '88px',
            marginRight: '20px',
            borderRadius: `${theme?.customization?.borderRadius}px`,
        },
        menuCaption: {
            fontSize: '0.875rem',
            fontWeight: 500,
            color: theme.heading,
            padding: '6px',
            textTransform: 'capitalize',
            marginTop: '10px',
        },
        subMenuCaption: {
            fontSize: '0.6875rem',
            fontWeight: 500,
            color: theme.darkTextSecondary,
            textTransform: 'capitalize',
        },
        commonAvatar: {
            cursor: 'pointer',
            borderRadius: '8px',
        },
        smallAvatar: {
            width: '22px',
            height: '22px',
            fontSize: '1rem',
        },
        mediumAvatar: {
            width: '34px',
            height: '34px',
            fontSize: '1.2rem',
        },
        largeAvatar: {
            width: '44px',
            height: '44px',
            fontSize: '1.5rem',
        },
    };
};

export default themeTypography;
