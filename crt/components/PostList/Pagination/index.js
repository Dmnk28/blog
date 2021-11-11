import { Button } from "@mui/material";

import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';

export default function Pagination(props) {
    const {totalPages, currentPage, prevDisabled, nextDisabled } = props;

    const prevPageUrl = currentPage === "2" ? "/blog" : `/blog/page/${parseInt(currentPage, 10) - 1}`;

    const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`

    return (
        <ul id="pagination-ul">
            <li>
                { prevDisabled && <Button id="prevBtn" variant="contained" disabled>
                    <NextLink href={prevPageUrl} passHref>
                        <MUILink variant="body">Previous Page</MUILink>
                    </NextLink>
                </Button> }

                { !prevDisabled && <Button id="prevBtn" variant="contained">
                    <NextLink href={prevPageUrl} passHref>
                        <MUILink variant="body" color="secondary">Previous Page</MUILink>
                    </NextLink>
                </Button> }
            </li>
            <li>
                <Button variant="contained" disabled>
                    Page {currentPage} of {totalPages}
                </Button>
            </li>
            <li>
                { nextDisabled && <Button id="prevBtn" variant="contained" disabled>
                    <NextLink href={nextPageUrl} passHref>
                        <MUILink variant="body">Next Page</MUILink>
                    </NextLink>
                </Button> }

                { !nextDisabled && <Button id="prevBtn" variant="contained">
                    <NextLink href={nextPageUrl} passHref>
                        <MUILink variant="body" color="secondary">next Page</MUILink>
                    </NextLink>
                </Button> }
            </li>
        </ul>
    );
}