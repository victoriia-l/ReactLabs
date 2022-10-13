import { Table, TableHead, TableBody, TableCell, TableRow, TableContainer } from "@mui/material";
import { CartRow } from "./cartRow";
import { useState } from "react";


export function Cart(props) {   
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const changeTotalPrice = (price) => {
        setTotalPrice((totalPrice) => totalPrice + price)
    }

    const changeTotalQuantity = (quantity) => {
        setTotalQuantity((totalQuantity) => totalQuantity + quantity)
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">Quantity</TableCell>
                        <TableCell align="center">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.map((item) => {
                        let {id, name, price, min} = item
                        let data = {id: id, name: name, price: price}
                        return (
                            CartRow(data, changeTotalPrice, changeTotalQuantity)
                        )
                    })}
                    <TableRow>
                        <TableCell align="left">Totals</TableCell>
                        <TableCell></TableCell>
                        <TableCell align="center">{totalQuantity}</TableCell>
                        <TableCell align="center">{totalPrice}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}