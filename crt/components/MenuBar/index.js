import React, { useState } from 'react';
import NextLink from 'next/link'
import { AppBar, Box, IconButton, Link as MUILink, Popover, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'

import Brightness2 from '@mui/icons-material/Brightness2';
import Brightness7 from '@mui/icons-material/Brightness7';
import MuiNextButton from '@components/MuiNextButton';

export default function MenuBar({mode, setMode}) {
    const [burgerPopoverAnchor, setBurgerPopoverAnchor] = React.useState(null);

    const menuItemsArray = [
        {
            name: 'Code',
            href: '/code',
        },
        {
            name: 'Ride',
            href: '/ride',
        },
        {
            name: 'Translate',
            href: '/translate',
        },
        {
            name: 'All Blogposts',
            href: '/blog',
        },
    ]

    const isBurgerOpen = Boolean(burgerPopoverAnchor);

    const handleBurgerClick = (event) => {
        setBurgerPopoverAnchor(event.currentTarget)
    }
    const handleBurgerPopoverClose = () => {
        setBurgerPopoverAnchor(null);
    }



    const handleModeBtn = () => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light')
        }
    }

    return (
        <AppBar id="menubar" color="primary" position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <NextLink href="/" passHref>
                        <MUILink sx={(mode === 'light') ? {color: '#F2527D', fontWeight: 600,} : {color: '#BF850B', fontWeight: 600,}} underline="hover">Code Ride Translate</MUILink>
                    </NextLink>
                </Typography>

                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                    {menuItemsArray.map((element, index) => (
                        <MuiNextButton key={element.name + index.toString()} href={element.href} color="inherit" btnText={element.name} deactivate={false}/>
                    ))}
                    <IconButton onClick={handleModeBtn} color="inherit">
                        {mode === 'light' ? <Brightness2 /> : <Brightness7 />}
                    </IconButton>
                </Box>
                
                <IconButton
                    id="burgerButton"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="burgermenu"
                    aria-describedby="burgerMenu"
                    onClick={handleBurgerClick}
                    sx={{ display: {xs: 'flex', md: 'none'}}}
                >
                    <MenuIcon />
                </IconButton>
                <Popover 
                        id="burgerMenu"
                        open={isBurgerOpen}
                        anchorEl={burgerPopoverAnchor}
                        onClose={handleBurgerPopoverClose}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center",
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                >
                    {menuItemsArray.map((element, index) => (
                        <MuiNextButton key={element.name + index.toString()} href={element.href} color="inherit" btnText={element.name} deactivate={false}/>
                    ))}       
                </Popover>
            </Toolbar>
        </AppBar>
    );
}