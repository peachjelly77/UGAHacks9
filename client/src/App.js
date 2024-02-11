import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Contect from './pages/CS/Contect';
import MapOne from './pages/Maps/MapOne';
import Event from './pages/Maps/Event';
import SignUp from './pages/CS/SignUp';

import "./style/basic.css"
import "./style/custom.css"
import "./style/form.css"
import "./style/size.css"
import "./style/theme.css"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/event' element={<Event/>}/>
          <Route path='/event/signup' element={<SignUp/>}/>
          <Route path='/event/map' element={<MapOne/>}/>
          <Route path='/cs' element={<Contect/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;