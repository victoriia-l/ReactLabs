import Form from "react-bootstrap/Form";

export function Cities(props){
    return (
        <div className="mb-3">
            <h3>Task 5</h3>
            <div style={{width: '300px'}}>
                <Form.Select aria-label="City Selector">
                    {props.map((city) => {
                            let {id, name} = city
                            return (
                                <option key={id} value={id}>{name}</option>
                            );
                        })}
                </Form.Select>
            </div>
        </div>
    );
}