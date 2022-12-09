import './App.css';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default/>
          <Route element={<ProductDetail/>} path='/product/:_id' />
          <Route element={<Update/>} path='/update/product/:_id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
