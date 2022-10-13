import { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import { Image } from "./photo";
import { FixedSizeList as List } from 'react-window';

export function PhotosTable() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('photos.json')
            .then((response) => response.json())
            .then((responseJson) => setData(responseJson.filter(item => item.title.split(' ').length <= 7)))
            .catch((error) => {
                console.error(error);
            });
    }, ['photos.json'])


    const Row = ({ index, style }) => (
                <Stack direction="row" spacing={10} style={style}>
                    <div>{data[index].id}</div>
                    <div>{data[index].title}</div>
                    <div>{Image(data[index].id, data[index].url, data[index].thumbnailUrl)}</div>
                </Stack>
      );

    return (
        <div>    
            <List
                height={500}
                itemCount={data.length}
                itemSize={35}
                width='100%'>            
            
                {Row}
            
            </List>
        </div>
    )
}