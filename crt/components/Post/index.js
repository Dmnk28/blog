import dynamic from "next/dynamic";
import Image from "next/image";
import { Box, Divider, Paper, Typography } from "@mui/material";
import Markdown from "@utils/MarkdownMUI";
import TagChips from "@components/TagChips";

const Card      = dynamic(() => import('@mui/material/Card'));
const CardMedia = dynamic(() => import('@mui/material/CardMedia'));

export default function Post (props) {
    const { post } = props;
    
    const splitContentByImagesRegex = /(!\[[\w*\s]*\w*\]\(\/\/images.ctfassets.net\/skkwqq7pcfcx\/\w*\/\w*\/[\w*\-]*\w*\.\w*\)|!\[[\w*\s]*\w*\]\(\/\/images.contentful.com\/skkwqq7pcfcx\/\w*\/\w*\/[\w*\-]*\w*\.\w*\))/g;
    const newContent                = post.content.split(splitContentByImagesRegex);
    const contentImages             = post.contentImagesCollection.items;
    
    return (
        <Box mt={2} >
            <Paper sx={{mx: {xs: 1, sm: 8, md: 14, lg: 30, xl: 57}}} elevation={15}>
                <Box borderRadius="5px 5px 0 0" overflow="hidden">
                    {post.titleImage ? (<Image src={post.titleImage.url} alt={post.titleImage.title} layout="responsive" width={post.titleImage.width} height={post.titleImage.height}/>) : ''}
                </Box>            
                <Box sx={{p: {xs: 3, sm: 4, md: 6}}}>
                
                    <Typography variant="h2" component="h1" color="secondary" sx={{mb: 3}}>
                        {post.title}
                    </Typography>
                    
                    <TagChips tags={post.tags}/>

                    <Divider sx={{my: 3}} />
                    { newContent.map((paragraph, index) => {
                        // if (paragraph == false) return;
                        if (paragraph.match(/^!\[/) && contentImages) {
                            const link = paragraph.replace(/^!\[[\w*\s]*\w*\]\(\/\/images.contentful.com|^!\[[\w*\s]*\w*\]\(\/\/images.ctfassets.net|\)/g, '');                            
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

                    {post.mapUrl && (
                        <Box mt={4}>
                            <Typography variant="h4" component="h2">Komoot-Route</Typography>
                            <Card>
                                <CardMedia 
                                component="iframe"
                                src={post.mapUrl} 
                                width="100%" 
                                height="680" 
                                frameBorder="0" 
                                scrolling="no"></CardMedia>
                            </Card>
                        </Box>
                    )}
                </Box>
            </Paper>
        </Box>
    );
}