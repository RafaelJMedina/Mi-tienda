import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBarExample from './components/Navbar';

function App() {
  return (
    <div className="App">

<BrowserRouter>
<Routes>
  <Route path='/' element={ <NavBarExample /> }>
    <Route index element={ <Home /> } />
    <Route path='about' element={ <About /> } />
    <Route path='contact' element={ <Contact /> } />
    <Route path='*' element={ <Navigate replace to="/"/> }/>
  </Route>
</Routes> 
</BrowserRouter>

    </div>
  );
}

export default App;