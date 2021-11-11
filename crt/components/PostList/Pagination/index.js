import { Button } from "@mui/material";
import Link from "next/link";

export default function Pagination(props) {
    const {totalPages, currentPage, prevDisabled, nextDisabled } = props;

    const prevPageUrl = currentPage === "2" ? "/blog" : `/blog/page/${parseInt(currentPage, 10) - 1}`;

    const nextPageUrl = `/blog/page/${parseInt(currentPage, 10) + 1}`

    return (
        <ul id="pagination-ul">
            <li>
                {/* {prevDisabled && <span>Previous page</span>} */}
                {!prevDisabled && (
                    <Button variant="contained">
                        <Link href={prevPageUrl}>
                            <a>Previous Page</a>
                        </Link>
                    </Button>
                )}
            </li>
            <li>
                <Button variant="contained" disabled>
                    Page {currentPage} of {totalPages}
                </Button>
            </li>
            <li>
                {/* {nextDisabled && <span>Next page</span>} */}
                {!nextDisabled && (
                    <Button variant="contained">
                        <Link href={nextPageUrl}>
                            <a>Next page</a>
                        </Link>
                    </Button>
                )}
            </li>
        </ul>
    );
}