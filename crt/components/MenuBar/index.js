import NextLink from 'next/link'
import { AppBar, IconButton, Link as MUILink, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

import Brightness2 from '@mui/icons-material/Brightness2';
import Brightness7 from '@mui/icons-material/Brightness7';
import MuiNextButton from '@components/MuiNextButton';

export default function MenuBar({mode, setMode}) {

    const handleModeBtn = () => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light')
        }
    }

    return (
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <NextLink href="/" passHref>
                        <MUILink sx={(mode === 'light') ? {color: '#F2527D', fontWeight: 600,} : {color: '#BF850B', fontWeight: 600,}} underline="hover">Code Ride Translate</MUILink>
                    </NextLink>
                </Typography>
                
                <MuiNextButton href="/code" color="inherit" btnText="Code" deactivate={false}/>
                <MuiNextButton href="/ride" color="inherit" btnText="Ride" deactivate={false}/>
                <MuiNextButton href="/translate" color="inherit" btnText="Translate" deactivate={false}/>
                <MuiNextButton href="/blog" color="inherit" btnText="All Blogposts" deactivate={false}/>
                
                <IconButton onClick={handleModeBtn} color="inherit">
                    {mode === 'light' ? <Brightness2 /> : <Brightness7 />}
                </IconButton>
                
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}