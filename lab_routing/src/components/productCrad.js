import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function ProductCard(props) {
    const { item } = props;

    return (
        <Card key={item.id}>
            <CardMedia
                component="img"
                height="140"
                image={item.thumbnail} alt={item.title} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                    Price: {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/products/${item.id}`}><Button size="small">More</Button></Link>
            </CardActions>
        </Card>
    )
}