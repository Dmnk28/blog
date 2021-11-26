import { Button, Typography } from "@mui/material";

import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
import MuiNextButton from "@components/MuiNextButton";

export default function Pagination(props) {
    const {totalPages, currentPage, prevDisabled, nextDisabled } = props;

    const prevPageUrl = currentPage === "2" ? "/blog" : `/blog/page/${parseInt(currentPage, 10) - 1}`;

    const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`

    return (
        <ul id="pagination-ul">
            <li>
                { prevDisabled && <MuiNextButton href={prevPageUrl} variant="contained" size="small" btnText="Prev" deactivate={true} /> }
                { !prevDisabled && <MuiNextButton href={prevPageUrl} variant="contained" size="small" color="secondary" btnText="Prev" /> }
            </li>
            <li>
                <Typography variant="h6" component="p" color="secondary">
                    Page {currentPage} of {totalPages}
                </Typography>
            </li>
            <li>
                { nextDisabled && <MuiNextButton href={nextPageUrl} variant="contained" size="small" btnText="Next" deactivate={true} /> }
                { !nextDisabled && <MuiNextButton href={nextPageUrl} variant="contained" size="small" color="secondary" btnText="Next" /> }
            </li>
        </ul>
    );
}