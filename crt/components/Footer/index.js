import NextLink from 'next/link';
import { Link as MUILink } from '@mui/material'

export default function Footer () {
    return (
        <footer id="footer">
            <NextLink href="https://do-webdev.de/projects/timer" passHref>
                <MUILink variant="body" color="secondary">&copy; 2021 Dominik Oesterle</MUILink>
            </NextLink>
        </footer>
    );
}