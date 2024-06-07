import { 
  ChakraProvider
} from '@chakra-ui/react'
import { Card } from './components/Card/Card';
import './reset.css';

function App() {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
}

export default App;
