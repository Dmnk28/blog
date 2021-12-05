import Image from "next/image";
import { Box, Paper, Typography } from "@mui/material";
import Markdown from "@utils/MarkdownMUI";


export default function Post (props) {
    const { post } = props;
    const newContent = post.content.split(/(!\[[\w*\s]*\w*\]\(\/\/images.contentful.com\/skkwqq7pcfcx\/6TsZU2BFlF3JprqvRBKDyX\/cf47c8845534e965cc5da69273998e6d\/[\w*\-]*\w*\.\w*\))/g);
    const contentImages = post.contentImagesCollection.items;
    return (
        <Box mt={2} >
            <Paper sx={{mx: {xs: 1, sm: 8, md: 14, lg: 30, xl: 57}}} elevation={15}>
                <Box borderRadius="5px 5px 0 0" overflow="hidden">
                    {post.titleImage ? (<Image src={post.titleImage.url} alt={post.titleImage.title} layout="responsive" width={post.titleImage.width} height={post.titleImage.height}/>) : ''}
                </Box>            
                <Box sx={{p: {xs: 3, sm: 4, md: 6}}}>
                
                    <Typography variant="h2" component="h1" color="secondary">
                        {post.title}
                    </Typography>
                
                    { newContent.map((paragraph, index) => {
                        // if (paragraph == false) return;
                        if (paragraph.match(/^!\[/) && contentImages) {
                            const link = paragraph.replace(/^!\[[\w*\s]*\w*\]\(\/\/images.contentful.com|\)/g, '');                            
                            let imageNumber = 0;
                            for (let i = 0; i < contentImages.length; i++) {
                                if (contentImages[i].url.endsWith(link)) imageNumber = i;
                            }
                            
                            return ( <Box key={contentImages[imageNumber].sys.id} sx={{p: 4, display: 'flex', justifyContent: 'center'}}>
                                        <Box sx={{maxWidth: {xs: '100%', md: '90%', lg: '80%'}}}>
                                            <Image
                                                src={contentImages[imageNumber].url}
                                                alt={contentImages[imageNumber].url} 
                                                layout="intrinsic"
                                                width={contentImages[imageNumber].width}
                                                height={contentImages[imageNumber].height}    
                                            />
                                            <Typography variant="body2" align="center">{contentImages[imageNumber].title}: {contentImages[imageNumber].description}</Typography>
                                        </Box>
                                    </Box>
                                    );
                        } 
                        return (<Markdown key={'p' + index.toString()}>{paragraph}</Markdown>)
                    })}
                    {/* <Markdown>{post.content}</Markdown> */}
                </Box>
            </Paper>
        </Box>
    );
}