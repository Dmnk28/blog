import NextLink from 'next/link';
import { Avatar, Grid, Link as MUILink, Typography, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStrava } from '@fortawesome/free-brands-svg-icons';

export default function Footer () {
    return (
        <footer id="footer">
            <Box sx={{my: 3, pt: 15,}} maxWidth="90vw">
                <Grid container /* spacing={4} */ sx={{m: 'auto',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Grid item xs={12} lg={2}sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mb: {xs: '3rem', lg: 'none'}, mr: {xs: 'none', lg: '3rem'} }}>
                        <Avatar alt="Dominik Oesterle" src="/avatar.webp" sx={{width: '12rem', height: '12rem'}} />
                    </Grid>
                    <Grid item xs={12} lg={5} sx={{my: 'auto', px: {xs: 5, md: 0}}}>
                        <Box>
                        <Typography variant="h5" textAlign={{xs: "center", lg: "left"}} gutterBottom>
                            Hey, ich bin Dominik.
                        </Typography>
                        <Typography variant="body1" textAlign={{xs: "center", lg: "left"}} gutterBottom>
                            Nach dem Studium der Arabistik und Geschichtswissenschaft habe ich zunächst 
                            als wissenschaftlicher Mitarbeiter an der Uni Jena gearbeitet.  
                        </Typography>
                        <Typography variant="body1" textAlign={{xs: "center", lg: "left"}}>
                            Seit 2019 fahre ich leidenschaftlich gern Rad und habe meine Liebe zum Webdevelopement wiederentdeckt.
                        </Typography>
                        </Box>
                        <Box mt={1} sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', lg: 'flex-end'}}}>
                            <IconButton href="https://github.com/Dmnk28" target="_blank" size="large" color="inherit"><FontAwesomeIcon icon={faGithub}/></IconButton>                            
                            <IconButton href="https://www.strava.com/dashboard" target="_blank"  size="large" color="inherit"><FontAwesomeIcon icon={faStrava}/></IconButton>
                            <IconButton href="https://www.linkedin.com/in/dominikoesterle/" target="_blank"  size="large" color="inherit"><FontAwesomeIcon icon={faLinkedin}/></IconButton>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={25} display="flex" justifyContent="space-around">
                    <Typography variant="body2">
                        &copy; 2021&nbsp;
                        <NextLink href="https://do-webdev.de/" passHref>
                            <MUILink variant="body2" color="inherit">Dominik Oesterle</MUILink>
                        </NextLink>
                    </Typography>
                    <Typography variant="body2"> 
                        {/* <NextLink href="/" passHref>
                            <MUILink variant="body2" color="inherit">Datenschutz</MUILink>
                        </NextLink>
                        &nbsp;|&nbsp;  */}
                        <NextLink href="https://do-webdev.de/impressum.html" passHref>
                            <MUILink variant="body2" color="inherit">Impressum</MUILink>
                        </NextLink>
                    </Typography>
                </Box>
            </Box>
        </footer>
    );
}