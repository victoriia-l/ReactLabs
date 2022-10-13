import React, { useState } from 'react';
import Button from '@mui/material/Button';

export function Counter(props) {
    let {start, min, max} = props;

    if(!start && !min && !max)
        start = 0
    if(!start && min)
        start = min

    const [count, setCount] = useState(start);
    
    const changeAdd = () => {
        if (!max || count < max)
            setCount((count) => count + 1)
    };

    const changeSub = () => {
        if (!min || count > min)
            setCount((count) => count - 1)
    };

    return (
        <div>
            <p>Поточний рахунок: {count}</p>
            <Button variant='contained' onClick={(changeAdd)}>+</Button>
            <Button variant='contained' onClick={(changeSub)} sx={{ ml: 1}}>-</Button>
            <Button variant='contained' onClick={() => setCount(start)} sx={{ ml: 1}}>Reset</Button>
        </div>
    );
}