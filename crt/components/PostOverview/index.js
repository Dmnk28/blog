import { Label } from '@mui/icons-material';
import Masonry, { Grid, Paper, Stack } from '@mui/material';
import Item from '@mui/material'
import { useState } from 'react';

export default function PostOverview ({posts}) {
    const [lastSize, setLastSize]           = useState(0);
    const [oneColumnLeft, setOneColumnLeft] = useState(false);
    
    const randomSize = () => {
        const possibleSizes = [8, 4, 6];
        let factor        = 2.5;
        
        if (oneColumnLeft && lastSize === 8) {
            setLastSize(4);
            setOneColumnLeft(!oneColumnLeft);
            return 4;
        } 

        if (oneColumnLeft && lastSize === 4) {
            setLastSize(8);
            setOneColumnLeft(!oneColumnLeft);
            return 8;
        }
        
        if (oneColumnLeft && lastSize === 6) {
            setLastSize(6);
            setOneColumnLeft(!oneColumnLeft);
            return 6;
        } 

        let result;

        while (lastSize === result) {
            result        = Math.floor(Math.random()*factor);
        }
        console.log(result);
        setLastSize(result);


    }

    return (
        <Grid container spacing={2}>
            {posts.map((post) => (
                <Grid item xs={12} md={8}>
                    {post.title}
                </Grid>
            ))}
        </Grid>
    );
}