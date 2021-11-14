import { Container } from "@mui/material";
import Image from 'next/image';

export default function Post (props) {
    const {post} = props;
    return (
        <div>
            {post.title}
        </div>
    );
}