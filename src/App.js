import './App.css';
import TestimonioCompente from './Componentes/Testimonio';
import { testimonioShawn, testimonioSarah, testimonioEmma } from './Componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        
        <TestimonioCompente {...testimonioShawn} />
        <TestimonioCompente {...testimonioSarah} />
        <TestimonioCompente {...testimonioEmma} />
      </div>
    </div>
  );
}

export default App;

