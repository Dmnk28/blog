import NextLink from 'next/link';

import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Masonry from '@mui/lab/Masonry';

export default function PostOverview ({posts}) {
    
    return (
        <Masonry columns={{xs: 1, sm: 2,lg: 3}} spacing={2} sx={{mt:2 }}>
            {posts.map((post) => (
                <Card key={post.sys.id} elevation={2}>
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
                        </CardContent>
                    </CardActionArea>         
                    </NextLink>               
                </Card>
            ))}
        </Masonry>
    );
}