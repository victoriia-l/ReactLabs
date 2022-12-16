import { List, ListItem, ListItemText } from '@mui/material';
import { Link } from "react-router-dom";
import { useLoaderData } from 'react-router-dom';
import Grid from '@mui/material/Grid';

export default function Categories() {
    const categories = useLoaderData();

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}><h1>Categories</h1></Grid>
            <Grid item xs={12}>
                <div>
                    <List sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 300,
                        '& ul': { padding: 0 },
                    }}
                        subheader={<li />}
                    >
                        {
                            categories.map((item, index) => (
                                <ListItem key={index}>
                                    <Link to={`/categories/${item}/products`}><ListItemText primary={item}></ListItemText></Link>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
            </Grid>
        </Grid>
    )
}