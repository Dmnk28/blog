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
        <AppBar color="primary" position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <NextLink href="/" passHref>
                        <MUILink color="secondary" underline="hover">Code Ride Translate</MUILink>
                    </NextLink>
                </Typography>
                
                <NextLink href="/code" passHref>
                    <Button color="inherit">Code</Button>
                </NextLink>
                <NextLink href="/ride" passHref>
                    <Button color="inherit">Ride</Button>
                </NextLink>
                <NextLink href="/translate" passHref>
                    <Button color="inherit">Translate</Button>
                </NextLink>
                <NextLink href="/blog" passHref>
                    <Button color="inherit">All Blogposts</Button>
                </NextLink>
                
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