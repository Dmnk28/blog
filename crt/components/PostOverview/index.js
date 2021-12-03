import NextLink from 'next/link';

import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/system';
import { ArrowForwardIos } from '@mui/icons-material';

export default function PostOverview ({posts}) {
    
    return (
        <Box display="flex" justifyContent="center" p={0} mb={3}>
            <Masonry columns={{xs: 1, sm: 2,lg: 3}} spacing={2}>
            {posts.map((post) => (
                <Card key={post.sys.id} elevation={7}>
                    <NextLink href={"/" + post.slug} passHref>
                    <CardActionArea>
                        {post.titleImage ? (<CardMedia>
                            <Image  src={post.titleImage.url}
                                    height={post.titleImage.height}
                                    width={post.titleImage.width}
                                    layout="responsive"
                                    sizes="100vw"
                                    alt={post.titleImage.description}
                            />
                        </CardMedia>) : ''}
                        <CardContent>
                            <Typography color="secondary" variant="h4" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body1">
                                {post.excerpt? post.excerpt : ''}
                            </Typography>
                            
                            <Box display="flex" justifyContent="end">
                                <ArrowForwardIos color="secondary"/>
                            </Box>
                        </CardContent>
                    </CardActionArea>         
                    </NextLink>               
                </Card>
            ))}
            </Masonry>
        </Box>
    );
}