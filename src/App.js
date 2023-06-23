import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:name' element={<SingleMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
