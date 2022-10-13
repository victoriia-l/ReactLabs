import { Counter } from "./counter";
import {List} from "@mui/material";
import ListItem from '@mui/material/ListItem';

export function CountersList(props) {
    
    return (
        <List align="center">
            {props.map((counter) => {
                let {id, initial, min, max} = counter

                const counter1 = {
                    start: initial,
                    min: min,
                    max: max
                } 
                return (
                    <ListItem key={id}>{Counter(counter1)}</ListItem>
                )
            })}
        </List>
    )
}