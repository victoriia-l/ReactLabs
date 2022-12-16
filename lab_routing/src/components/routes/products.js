import { useLoaderData, useSearchParams } from "react-router-dom";
import { Box } from "@mui/system";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import ProductCard from "../productCrad";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';

export default function Products() {
    const products = useLoaderData().products;
    const [searchParams, setSearchParams] = useSearchParams();
    const searchString = searchParams.get("q");
    let [searchResult, setSearchResult] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        async function getProducts() {
            let response = await fetch(`https://dummyjson.com/products/search?q=${searchString}`, {
                signal: abortController.signal,
            });
            if (!abortController.signal.aborted) {
                let data = await response.json();
                setSearchResult(data.products);
            }
        }
        if (searchString) {
            getProducts();
        }
        return () => {
            abortController.abort()
        }
    }, [searchString]);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchedProducts = formData.get("q");
        if (!searchedProducts) setSearchResult(null);
        setSearchParams({ q: searchedProducts });
    }

    return (
        <Box>
            <form>
                <TextField name="q" placeholder="Search" variant="filled" sx={{ m: 1, width: 350 }}></TextField>
                <Button type="submit" variant='contained' sx={{ m: 1, height: 56 }}>Search</Button>
            </form>
            <Grid container gap={2} justifyContent="center">
            {
                !searchResult ? products.map((item) => (<Grid item xs={2}><ProductCard key={item.id} item={item} /></Grid>)) : searchResult.map((item) => (<Grid item xs={4}><ProductCard key={item.id} item={item} /></Grid>))
            }
            </Grid>
        </Box>
    )
}