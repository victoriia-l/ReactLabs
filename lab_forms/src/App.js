import './App.css';
import { ContactForm } from './components/formContact';
import { FormNovaPoshta } from './components/formNovaPoshta';
import Container from '@mui/material/Container';

const cities = [{ id: 1, city: 'Житомир' },
  { id: 2, city: 'Київ' },
  { id: 3, city: 'Львів' },
  { id: 4, city: 'Вінниця' },
  { id: 5, city: 'Чернівці' },
  { id: 6, city: 'Івано-Франківськ' }];

  const palettes = [{ id: 1, label: "Палета 1" },
  { id: 2, label: "Палета 2" },
  { id: 3, label: "Палета 3" }]

  const typeSend = [{ id: 1, value: 'palette', lable: 'палети' },
  { id: 2, value: 'load', lable: 'вантажі' }];

  const returnTypes = [{ id: 1, returnType: 'грошовий переказ' },
  { id: 2, returnType: 'документи' }];

function App() {
  return (
    <Container>
      <h3>Контактна форма</h3>
      <div><ContactForm /></div>
      <h3>Вартість доставки</h3>
      <div><FormNovaPoshta cities={cities} palettes={palettes} typeSend={typeSend} returnTypes={returnTypes}/></div>
    </Container>
  );
}

export default App;
