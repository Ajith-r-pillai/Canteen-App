
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Canteen from './components/Canteen';

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='home' element={<Canteen/>}></Route>
      
      </Routes>
    </div>
  );
}

export default App;
