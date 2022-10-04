import './App.css';
import { BasicTable } from './components/task2';
import { Product } from './components/task3';
import { Cities } from './components/task5';
import { Colours } from './components/task6';
import { itemList } from './components/task4/itemList';


const myName = <strong>Viktoriia!</strong>

const planet = {name: "Naboo"}

const cities = [
  {id: 1, name: "Chicago", image: 'chicago.jpg'},
  {id: 2, name: "Los Angeles", image: 'los-angeles.jpg'},
  {id: 3, name: "New York", image: 'new-york.jpg'},
]

const colors = {
  colours: ["purple", "cyan", "pink", "green"],
  text: "New Background is ",
  bgColour: "grey"
}

const products = [
  {
      title: "APPLE Pencil (MK0C2ZM/A)",
      img: require('./assets/apple_pen.webp'),
      price: "100 €"
  },
  {
      title: "SANDISK 2TB SSD Festplatte Extreme Portable V2, USB-C 3.2",
      img: require('./assets/ssd.webp'),
      price: "190 €"
  },
  {
    title: "APPLE iPad 10.2' Wi-Fi 64GB 9th Gen. Space Grau",
    img: require('./assets/ipad.webp'),
    price: "360 €"
},
  {
      title: "CANON Fotopapier + Farbband RP-108 10x15 cm",
      img: require('./assets/fotopaper.webp'),
      price: "39 €"
  },
]

function App() {
  return (
    <div id="container">
        <h1>Hello, {myName}</h1>

        {BasicTable()}

        {Product(planet)}

        {itemList(products)}

        {Cities(cities)}

        {Colours(colors)}
        
      </div>
  );
}


export default App;
