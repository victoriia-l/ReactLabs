import { Button } from "@mui/material";
import { useState } from "react";


let randomNum = Math.round(Math.random() * 1000);
console.log(randomNum)

export function GuessTheNumber() {
    const [bool1, setBool1] = useState(true);
    const [bool2, setBool2] = useState(false);
    const [value, setValue] = useState("");
    const [count, setCount] = useState(0);
    const onChange = e => setValue(e.target.value);
    const [results, setResult] = useState([]);

    const onClick = () => {
        setBool1(false)
        setCount((count) => count + 1)
        const userGuess = value;
        if (count < 10)
            if (userGuess == randomNum){
                setResult([...results, 'Good job!']);
                setBool2(true);
            }
            else if (userGuess > randomNum)
                setResult([...results, 'N < ' + userGuess + '\n']);
            else if (userGuess < randomNum && userGuess !== "")
                setResult([...results, 'N > ' + userGuess + '\n']);
            else setResult("");
        else {
            setCount(10);
            setBool2(true);
            setResult([...results, ' Number of tries is more than 10']);
        }
    }

    const setReset = () => {
        setCount((count) => count * 0);
        setResult([]);
        setValue("");
        setBool1(true);
        setBool2(false);
        randomNum = Math.round(Math.random() * 1000);
        console.log(randomNum);
    }

    return (
        <div>
            <h2>Guess the number between 1 and 1000</h2>
            <input value={value} type="number" onChange={onChange}></input>
            <Button type="submit" onClick={onClick} disabled={bool2} variant='contained' sx={{ ml: 1}}>GUESS</Button>
            <Button type="submit" onClick={setReset} disabled={bool1} variant='contained' sx={{ ml: 1}}>RESET</Button>
            <p>Information</p>
            <p>Attempts: {count}</p>
            {
                results.map((result, i) => {
                return (<p key={i}>{result}</p>)
            })}
            
        </div>
    )
}