import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import ClientList from './ClientList';
import ClientEdit from './ClientEdit';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AppNavbar from './AppNavbar';

const App = () => {
   return (
           <div>
            <BrowserRouter>
             <AppNavbar/>
               <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/clients'  element={<ClientList/>}/>
                  <Route path='/clients/:id' element={<ClientEdit/>}/>
               </Routes>
            </BrowserRouter>
           </div>
         );
};

export default App;
