import NextLink from 'next/link';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import Masonry from '@mui/lab/Masonry';
import { Box } from '@mui/system';
import { ArrowForwardIos } from '@mui/icons-material';

export default function PostOverview ({posts}) {
    
    return (
        <Box display="flex" justifyContent="center" my={3} mx={{sm: 3, md: 4, lg: 10, xl: 30}}>
            <Masonry columns={{xs: 1, sm: 2,lg: 3}} spacing={3}>
            {posts.map((post) => (
                <article key={post.sys.id}>
                <Card elevation={10}>
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
                </article>               
            ))}
            </Masonry>
        </Box>
    );
}