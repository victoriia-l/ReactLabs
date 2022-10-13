import './App.css';
import { PhotosTable } from './components/photosTable';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className='App'>
      <Container fixed>
        {PhotosTable()}
      </Container>
    </div>
  );
}

export default App;
