import { Table, TableHead, TableBody, TableCell, TableRow } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";

export function CartRow(props, changeTotalPrice, changeTotalQuantity) {
    const {id, name, price} = props;
    const [count, setCount] = useState(0);
    const [bool1, setBool1] = useState(true);
    

    const changeAdd = () => {
        setCount((count) => count + 1)
        changeTotalPrice(price)
        changeTotalQuantity(1)
        setBool1(false)
    };

    const changeSub = () => {
        if (count !== 0 ) {
            setCount((count) => count - 1)
            changeTotalPrice(-price)
            changeTotalQuantity(-1)
        }
        if (count === 0)
            setBool1(true)
    };
    return(
        <TableRow key={id}>
            <TableCell align="left">{name}</TableCell>
                <TableCell align="center">{price}</TableCell>
                <TableCell align="center"><Button variant='contained' onClick={(changeAdd)}>+</Button> {count} 
            <Button variant='contained' onClick={(changeSub)} disabled={bool1} sx={{ ml: 1}}>-</Button></TableCell>
                <TableCell align="center">{price * count}</TableCell>
        </TableRow>
    )
}