import './App.css';
import Main from './views/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path='/' default/>
          Route element
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
