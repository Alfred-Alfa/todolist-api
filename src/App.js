import logo from './logo.svg';
import './App.css';
import Add from './Components/Add';
import Search from './Components/Search';
import Delete from './Components/Delete';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './Components/View';

function App() {
  return (
    <div >

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Add/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/view' element={<View/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
