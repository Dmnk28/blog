
import { Box, Paper, Typography } from "@mui/material";
import Image from 'next/image';
import marked from 'marked';
import Markdown from "@utils/MarkdownMUI";


export default function Post (props) {
    const {post} = props;

    return (
        <Box mt={2} >
            <Paper id="blogpost-single-view" elevation={6}>
                <Typography variant="h2" component="h1">
                    {post.title}
                </Typography>
                
                <Markdown>{post.content}</Markdown>

            </Paper>
        </Box>
    );
}