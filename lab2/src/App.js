import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter';
import { CountersList } from './components/counterList';
import { Cart } from './components/table';
import { Container } from '@mui/material';
import { GuessTheNumber } from './components/guessTheNumber';

const counter1 = {
  start: 8,
  min: -10,
  max: 10
}

const counters = [
  {id: 1, initial: 6, min: -5, max: 10},
  {id: 2, initial: 5},
  {id: 3},
  {id: 4, min: 5},
  {id: 5, initial: 2}
]

const data = [
  {id: 1, name: "LEGO", price: 300, min: 0},
  {id: 2, name: "Train Station", price: 200, min: 0},
  {id: 3, name: "Hot Wheels Track", price: 150, min: 0}
]

function App() {
  return (
    <Container align="center">
      {Counter(counter1)}
      {CountersList(counters)}
      {Cart(data)}
      {GuessTheNumber()}
    </Container>
  );
}

export default App;
