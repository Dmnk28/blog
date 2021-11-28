
import { Box, Paper, Typography } from "@mui/material";
import Markdown from "@utils/MarkdownMUI";


export default function Post (props) {
    const {post} = props;

    return (
        <Box mt={2} >
            <Paper sx={{p:2}} elevation={6}>
                <Typography variant="h2" component="h1">
                    {post.title}
                </Typography>
                
                <Box sx={{position: 'relative'}}>
                    <Markdown>{post.content}</Markdown>
                </Box>
            </Paper>
        </Box>
    );
}