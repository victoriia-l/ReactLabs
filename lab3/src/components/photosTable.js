import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import { Image } from "./photo";

export function PhotosTable() {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch('photos.json',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
        });
    }
    useEffect(() => {
        getData()
    }, [])
    
    const dataToDisplay = data.filter(item => item.title.split(' ').length <= 7)
    console.log(dataToDisplay)

    return (
        <div>{dataToDisplay && dataToDisplay.length>0 && dataToDisplay.map((item, id) => {
            return (
                <Stack direction="row" spacing={10} key={id}>
                    <div>{id}</div>
                    <div>{item.title}</div>
                    <div>{Image(id, item.url, item.thumbnailUrl)}</div>
                
                </Stack>
            )
        })}</div>
    )
}