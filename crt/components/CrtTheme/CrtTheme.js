import { grey } from "@mui/material/colors";

const getLightVsDark = (mode) => (mode === 'light') ? {
    /* Light Side */
    palette: {
        primary: {
            main: '#18C29C', // F2C12E
        },
        divider: '#D97904'[200],
        secondary: {
            main: '#105961', // Blau 307EA6 / Lila: 6516F2
            contrastText: '#EBE9E8',
        },
        tertiary: { 
            light: '#F59DB4',
            main: '#F2527D',
            dark: '#BF4163',
            darker: '#73273B', 
            contrastText: '#F5F4F2',
        },
        background: {
            default: '#EBE9E8', //FFFEFC
            paper: '#F5F4F2', //F2F1F0  EBE9E8
        },
        text: {
            primary: '#132336',
            secondary: '#126872',
            tertiary: '#F2527D'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    } } : {
    /* Dark Side */
    palette: {    
        primary: {
            main: '#105961',
        },
        divider: '#023E73'[200],
        secondary: {
            main: '#F2527D',
            light: '#F2527D'[800],
        },
        tertiary: { 
            light: '#D9AD4E',
            main: '#BF850B',
            dark: '#8F6409',
            darker: '#5C4006', 
            contrastText: '#132336',
        },
        background: {
            default: '#132336',
            paper: '#424242',
        },
        text: {
            primary: grey[100],
            secondary: grey[500]
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
        action: {
            // The color of an active action like an icon button. 
            active: 'rgba(0, 0, 0, 0.54)', 
            // The color of an hovered action. 
            hover: 'rgba(0, 0, 0, 0.04)', 
            hoverOpacity: 0.04, 
            // The color of a selected action. 
            selected: 'rgba(0, 0, 0, 0.08)', 
            selectedOpacity: 0.08, 
            // The color of a disabled action. 
            disabled: 'rgba(0, 0, 0, 0.26)', 
            // The background color of a disabled action. 
            disabledBackground: 'rgba(0, 0, 0, 0.12)', 
            disabledOpacity: 0.38, 
            focus: 'rgba(0, 0, 0, 0.12)', 
            focusOpacity: 0.12, 
            activatedOpacity: 0.12, 
        }
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#105961', //147580
                }
            }
        }
    }};


export default getLightVsDark;