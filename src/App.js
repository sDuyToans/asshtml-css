import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Assign1 from './routes/assign1/Assign1';
import Assign2 from './routes/assign2/Assign2';
import Assign3 from './routes/assign3/Assign3';
import Assign4 from './routes/assign4/Assign4';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='assign1' element={<Assign1/>}/>
        <Route path='assign2' element={<Assign2/>}/>
        <Route path='assign3' element={<Assign3/>}/>
        <Route path='assign4' element={<Assign4/>}/>
      </Route>
    </Routes>
  );
}

export default App;