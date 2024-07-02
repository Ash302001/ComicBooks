import logo from './logo.svg';
import './App.css';
import Ebooks from './Components/Ebooks';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Read from './Components/Read';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import Signup from './Components/Signup';
import { useEffect, useState } from 'react';


function App() {
    const [authorize, setAuthorize] = useState(false)

    useEffect(()=>{
      if(localStorage.getItem('auth')==="authorized"){
        setAuthorize(true)
      }
      else{
        setAuthorize(false)
      }
    })
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/login' element={<Login/>} exact/>
      <Route path='/' element={<Welcome/>} exact/>
      <Route path='/ebooks' element={<Ebooks/>} exact/>
      <Route path='/read' element={<Read/>} exact/>
      <Route path='/sign' element={<Signup/>} exact/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
