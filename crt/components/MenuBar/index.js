import NextLink from 'next/link'
import { AppBar, IconButton, Link as MUILink, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

import { Button } from '@mui/material';
import Brightness2 from '@mui/icons-material/Brightness2';
import Brightness7 from '@mui/icons-material/Brightness7';


export default function MenuBar({mode, setMode}) {

    const handleModeBtn = () => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light')
        }
    }

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <NextLink href="/">Code Ride Translate</NextLink>
                </Typography>
                
                <IconButton onClick={handleModeBtn} color="inherit">
                    {mode === 'light' ? <Brightness2 /> : <Brightness7 />}
                </IconButton>
                
                <Button color="inherit">Code</Button>
                <Button color="inherit">Ride</Button>
                <Button color="inherit">Translate</Button>
                <Button color="inherit" href="/blog">All Blogposts</Button>
                <Button
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2}}
                >
                    <MenuIcon />
                </Button>
            </Toolbar>
        </AppBar>
    );

}