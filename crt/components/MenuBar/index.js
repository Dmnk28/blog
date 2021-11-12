import NextLink from 'next/link'
import { AppBar, IconButton, Link as MUILink, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

import { Button } from '@mui/material';

export default function MenuBar() {

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <NextLink href="/">Code Ride Translate</NextLink>
                </Typography>
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