import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchProduct from './components/SearchProduct';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/search' element={<SearchProduct/>}/>
      <Route path='/delete' element={<DeleteProduct/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      </Routes></BrowserRouter>

  );
}

export default App;
