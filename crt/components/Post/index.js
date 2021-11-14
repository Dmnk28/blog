import { Box, Paper, Typography } from "@mui/material";
import Image from 'next/image';
import ReactMarkdown from "react-markdown";
import ReactMarkdownRenderers from "@utils/ReactMarkdownRenderers";

export default function Post (props) {
    const {post} = props;
    return (
        <Box mt={2} >
            <Paper elevation={6}>
                <Typography variant="h2" component="h1">
                    {post.title}
                </Typography>

                <ReactMarkdown components={ReactMarkdownRenderers(post.content)}>
                    {post.content}
                </ReactMarkdown>

            </Paper>
        </Box>
    );
}