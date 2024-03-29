import React, { useState } from 'react';
import NextLink from 'next/link'
import { AppBar, Avatar, Box, Button, Divider, IconButton, Link as MUILink, List, ListItemButton, ListItemAvatar, ListItemText, Paper, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Modal from '@mui/material/Modal'

import Brightness2 from '@mui/icons-material/Brightness2';
import Brightness7 from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import MuiNextButton from '@components/MuiNextButton';

import { menuItemsArray } from './_menuItems';


export default function MenuBar(props) {
    const { mode, setMode } = props;
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    // const [navValue, setNavValue]     = React.useState(0);

    const handleBurgerOpen = () => setBurgerOpen(true); 
    const handleBurgerClose = () => setBurgerOpen(false);

    const handleModeBtn = () => {
        if (mode === 'light') {
          setMode('dark');
        } else {
          setMode('light');
        }
    }

    // const handleNavTabs = (event, newNavValue) => {
    //     event.preventDefault();
    //     setNavValue(newNavValue);
    // }

    return (
        <AppBar id="menubar" color="primary" position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    <NextLink href="/" passHref>
                        <MUILink    sx={ (mode === 'light') ? {color: '#304D5C', fontWeight: 600,} : 
                                        {color: '#BF850B', fontWeight: 600,} } 
                                    underline="hover"
                        >
                                    CRT
                        </MUILink>
                    </NextLink>
                </Typography>

                <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                    {   
                        menuItemsArray.map((element, index) => (
                            <MuiNextButton  key={element.name + index.toString()} 
                                            href={element.href} 
                                            color="inherit" 
                                            btnText={element.name} 
                                            deactivate={false}/>
                        ))
                        
                    }
                    
                    
                    
                    {/* 
                    <Tabs value={navValue} onChange={handleNavTabs} textColor="secondary" indicatorColor="secondary" aria-label="navigation tabs">
                    
                    </Tabs>
                        function TabLink(props) {
                           return (
                                <NextLink key={props.key} href={props.href} passHref>
                                    <Tab component="a" onClick={(event) => {
                                        event.preventDefault();
                                    }}
                                {...props}
                                    />
                                </NextLink>
                            );
                        }
                    
                    
                        menuItemsArray.map((element, index) => {
                            console.log(element.href);
                            return (
                                <NextLink key={element.name} href={element.href} passHref>
                                    <Tab component="a" label={element.name} value={index}/>
                                </NextLink>    
                        )})
                        
                        
                        menuItemsArray.map((element, index) => {
                            console.log(element.href);
                            return (
                                
                                    <Tab key={element.name} component="NextLink" to={element.href} label={element.name}/>
                                
                        )})

                        {menuItemsArray.map((element, index) => (
                        <MuiNextButton  key={element.name + index.toString()} 
                                        href={element.href} 
                                        color="inherit" 
                                        btnText={element.name} 
                                        deactivate={false}/>
                    ))} */}
                    <Button onClick={handleModeBtn} color="inherit">
                        {mode === 'light' ? <Brightness2 /> : <Brightness7 />}
                    </Button>
                </Box>
                
                <Button id="burgerButton"
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="burgermenu"
                        onClick={handleBurgerOpen}
                        sx={{ display: {xs: 'flex', md: 'none'}}}
                >
                    <MenuIcon />
                </Button>
                <Modal  open={burgerOpen}
                        onClose={handleBurgerClose}
                        aria-label="Mobile Menu"
                >
                    <Paper sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                boxShadow: '24',
                                minWidth: '70%',
                                p: 1
                            }}
                    >
                        <Box sx={{display: 'flex',justifyContent: "end"}}>
                            <IconButton onClick={handleBurgerClose} 
                                    aria-label="close" 
                                    color="secondary"
                                    edge="start"
                            >
                                <CloseIcon />
                            </IconButton>
                        
                        </Box>
                        
                        <List>
                        {menuItemsArray.map((element, index) => (
                            <React.Fragment key={element.name + index.toString()}>
                                <NextLink href={element.href} passHref>
                                    <ListItemButton onClick={handleBurgerClose} component="a">
                                        <ListItemText primary={element.name}/>
                                    </ListItemButton>
                                </NextLink>
                                <Divider />
                            </React.Fragment>
                        ))}
                            
                            <ListItemButton sx={{mt:2}} onClick={handleModeBtn} color="inherit">
                                <ListItemAvatar>
                                    <Avatar sx={{bgcolor: mode === 'light' ? 'primary' : ''}}>
                                    { mode === 'light' ? <Brightness2 color="secondary"/> : <Brightness7 color="secondary"/>}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={ mode === 'light' ? 'Dark Mode' : 'Light Mode' }/>    
                            </ListItemButton>
                        </List>
                    </Paper>       
                </Modal>
            </Toolbar>
        </AppBar>
    );
}