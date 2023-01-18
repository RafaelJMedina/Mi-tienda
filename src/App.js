import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NavBar from './components/Navbar/NavBar';
import ProductoLista from './components/Productos/Productos';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBar/> }>
          <Route index element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='contact' element={ <Contact /> } />
          <Route path='*' element={ <Navigate replace to="/"/> }/>
        </Route>
      </Routes> 
      </BrowserRouter>
    </div>
      <ProductoLista />
    </DataProvider>
  );
}

export default App;