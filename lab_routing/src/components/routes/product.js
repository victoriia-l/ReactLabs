import { useLoaderData } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: 153.3,
    objectFit: 'cover'
});

export default function Product() {
    const product = useLoaderData();
    const images = product.images;

    return (
        <Paper
            sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 1000,
                flexGrow: 1
            }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src={images[0]} />
                </Grid>
                <Grid item xs={6}>
                    <Typography gutterBottom variant="h4" component="div">{product.title}</Typography>
                    <Typography gutterBottom variant="subtitle2" component="div">Price: {product.price}</Typography>
                    <Typography gutterBottom variant="body2" component="div">Description: {product.description}</Typography>
                    <Typography gutterBottom variant="subtitle2" component="div">Rating: {product.rating}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Img src={images[1]} />
                </Grid>
                <Grid item xs={2}>
                    <Img src={images[2]} />
                </Grid>
                <Grid item xs={2}>
                    <Img src={images[3]} />
                </Grid>
            </Grid>
        </Paper>
    )
}