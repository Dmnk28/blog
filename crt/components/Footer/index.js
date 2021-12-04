import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material'
import { Box } from '@mui/system';

export default function Footer () {
    return (
        <footer id="footer">
            <Box sx={{my: 6, p: 9,}}>
                <NextLink href="https://do-webdev.de/projects/timer" passHref>
                    <MUILink variant="body" color="primary">&copy; 2021 Dominik Oesterle</MUILink>
                </NextLink>
            </Box>
        </footer>
    );
}