import Home from './componentes/Home';
import Narbar from './componentes/Narbar'
import Contacto from './componentes/Contacto';
import Error from './componentes/Error';
import { BrowserRouter, Routes, Route,  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='narbar'><Narbar /></div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/*" element={<Error />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
