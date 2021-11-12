import { grey } from "@mui/material/colors";

const getLightVsDark = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light' ?
        {   
            /* Light Side */
            primary: {
                main: '#D97904',
            },
            divider: '#D97904'[200],
            secondary: {
                main: '#203644',
            },
            text: {
                primary: grey[900],
                secondary: grey[800]
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
        } : {
            /* Dark Side */
            primary: {
                main: '#023E73',
            },
            divider: '#023E73'[200],
            secondary: {
                main: '#F2C12E',
            },
            background: {
                default: '#303030',
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
            },
        })
    }
  });

export default getLightVsDark;