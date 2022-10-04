import { useState } from "react";
import Form from "react-bootstrap/Form";

export function Colours(props) {
    let {colours, text, bgColour} = props;
    const [colour, setColour] = useState(bgColour);
    const changeColour = (e) => {
        setColour(e.target.value)
    }
    return (
        <div className="mb-5">
            <h3>Task 6</h3>
            <div style={{width: '500px'}}>
                <p style={{backgroundColor: colour}}>{text} {colour}</p>
                <Form.Select aria-label="City Selector" onChange={changeColour}>
                <option selected disabled>Select menu</option>
                    {colours.map((colour) => {
                            return (
                                <option key={colour} value={colour}>{colour}</option>
                            );
                        })}
                </Form.Select>
            </div>
        </div>
    )
}