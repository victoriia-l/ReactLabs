import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import { Item } from './item';

export function itemList(props){
    return (
        <div>
            <h3>Task 4</h3>
            <CardGroup>
                {props.map((item) => { return Item(item) } )}
            </CardGroup>
            <div className='text-center mt-3 mb-3'>
                <Button variant='primary'>Press to see something...</Button>
            </div>
        </div>
    )
}
