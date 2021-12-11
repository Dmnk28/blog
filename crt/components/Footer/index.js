import NextLink from 'next/link';
import { Avatar, Grid, Link as MUILink, Typography, IconButton } from '@mui/material'
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStrava } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
    return (
        <footer id="footer">
            <Box sx={{my: 6, pt: 15,}} maxWidth="90vw">
                <Grid container spacing={4} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Grid item xs={12} lg={2}sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', lg: 'flex-end'}}}>
                        <Avatar alt="Dominik Oesterle" src="/avatar.png" sx={{width: '12rem', height: '12rem'}} />
                    </Grid>
                    <Grid item xs={12} lg={6} sx={{my: 'auto', px: {xs: 5, md: 0}}}>
                        <Box>
                        <Typography variant="h5" textAlign={{xs: "center", lg: "left"}} gutterBottom>
                            Über mich
                        </Typography>
                        <Typography variant="body1" textAlign={{xs: "center", lg: "left"}}>
                            Hey, ich bin Dominik. Nach dem Studium der Arabistik und Geschichtswissenschaft habe ich zunächst 
                            an der Uni als wissenschaftlicher Mitarbeiter gearbeitet.  
                            Seit 2019 fahr ich leidenschaftlich gerne Rad und habe meine Liebe zum Webdevelopement wiederentdeckt.
                        </Typography>
                        </Box>
                        <Box mt={1} sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', lg: 'flex-end'}}}>
                            <IconButton href="https://github.com/Dmnk28" target="_blank" size="large" color="inherit"><FontAwesomeIcon icon={faGithub}/></IconButton>
                            
                            <IconButton href="https://www.strava.com/dashboard" target="_blank"  size="large" color="inherit"><FontAwesomeIcon icon={faStrava}/></IconButton>
                            
                            <IconButton href="https://www.linkedin.com/in/dominikoesterle/" target="_blank"  size="large" color="inherit"><FontAwesomeIcon icon={faLinkedin}/></IconButton>
                        
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={25}>
                    
                    <Typography variant="body2">
                        <NextLink href="https://do-webdev.de/projects/timer" passHref>
                            <MUILink variant="body2" color="inherit">&copy; 2021 Dominik Oesterle</MUILink>
                        </NextLink>
                        &nbsp;|&nbsp; 
                        <NextLink href="/" passHref>
                            <MUILink variant="body2" color="inherit">Impressum</MUILink>
                        </NextLink>
                    </Typography>
                </Box>
            </Box>
        </footer>
    );
}