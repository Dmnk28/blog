const getLightVsDark = (mode) => (mode === 'light') ? {
    /* Light Side */
    palette: {
        primary: {
            main:           '#46B8AA', 
        },
        divider:            '#D97904'[200],
        secondary: {
            main:           '#105961', 
            contrastText:   '#EBE9E8',
        },
        tertiary: { 
            main:           '#BF4163',
            dark:           '#8C3048',
            contrastText:   '#F5F4F2',
        },
        background: {
            default:        '#EBE9E8',
            paper:          '#F5F4F2', 
        },
        text: {
            primary:        '#132336',
            secondary:      '#126872',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#46B8AA', 
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background:         '#EBE9E8 url("/background_light1.svg") no-repeat fixed',
                    backgroundPosition: 'bottom left',
                    backgroundSize:     'cover',
                },
                '#footer': {
                    background:         'url("/background_footer_light1.svg")',
                    backgroundSize:     'cover',
                    backgroundPosition: 'top left',
                    backgroundColor:    'transparent',
                    color:              '#F5F4F2',
                }
            }
        }
    }} : {
    /* Dark Side */
    palette: {    
        primary: {
            main:           '#105961',
        },
        divider:            '#023E73'[200],
        secondary: {
            main:           '#F2527D',
            light:          '#F2527D'[800],
            contrastText:   '#132336',
        },
        tertiary: { 
            light:          '#D9AD4E',
            main:           '#BF850B',
            dark:           '#8F6409',
            darker:         '#5C4006', 
            contrastText:   '#132336',
        },
        background: {
            default:        '#132336',
            paper:          '#424242',
        },
        text: {
            primary:        '#F5F4F2',
            secondary:      '#F5F4F2'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        action: { 
            active:                 'rgba(0, 0, 0, 0.54)',      // The color of an active action like an icon button.
            hover:                  'rgba(0, 0, 0, 0.04)',       
            hoverOpacity:           0.04,  
            selected:               'rgba(0, 0, 0, 0.08)',       
            selectedOpacity:        0.08,  
            disabled:               'rgba(0, 0, 0, 0.26)',       
            disabledBackground:     'rgba(0, 0, 0, 0.12)', 
            disabledOpacity:        0.38, 
            focus:                  'rgba(0, 0, 0, 0.12)', 
            focusOpacity:           0.12, 
            activatedOpacity:       0.12, 
        },

    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#105961', 
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background:         '#132336 url("/background_dark3.svg") no-repeat fixed',
                    backgroundPosition: 'bottom left',
                    backgroundSize:     'cover',
                },
                '#footer': {
                    background:         'url("/background_footer_dark3.svg")',
                    backgroundSize:     'cover',
                    backgroundPosition: 'top left',
                    backgroundColor:    'transparent',
                }
            }
        }
    },
};


export default getLightVsDark;