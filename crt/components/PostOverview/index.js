import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function PostOverview ({posts}) {
    
    return (
        <Grid container spacing={2} mt={2}>
            {posts.map((post) => (
                <Grid item xs={12} md={6} lg={4} key={post.sys.id}>
                    <Card>
                        <CardActionArea href={post.slug}>
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
                                    {post.excerpt}
                                </Typography>
                            </CardContent>
                        </CardActionArea>                        
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}