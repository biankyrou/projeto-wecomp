import './App.css';
import Home from './paginas/Home/home';
import Sobre from './paginas/Sobre/sobre';
import Cronograma from './paginas/Cronograma/cronograma'
import Equipe from './paginas/Equipe/equipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>} />
      <Route path='/sobre' element={<Sobre></Sobre>} />
      <Route path='/cronograma' element={<Cronograma></Cronograma>} />
      <Route path='/equipe' element={<Equipe></Equipe>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

