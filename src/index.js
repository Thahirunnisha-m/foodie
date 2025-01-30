import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import FastFood from './pages/FastFood';
import Meat from './pages/Meat';
import Backery from './pages/Backery';
import Drinks from './pages/Drinks';
import Salads from './pages/Salads'

function Apps(){
return(
  <BrowserRouter basename='foodie'>
  <Routes>
   <Route path="/"element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="menu" element={<Menu/>}/>
    <Route path= "fastfood" element={<FastFood/>}/>
    <Route path= "meat" element ={<Meat/>}/>
    <Route path= "backery" element ={<Backery/>}/>
    <Route path= "drinks" element ={<Drinks/>}/>
    <Route path= "salads" element ={<Salads/>}/>
    <Route path="contact"element={<Contact/>}/>
    {/* <Route path="mycarousel"element={<MyCarousel/>}/> */}
    </Route>
  </Routes>
  </BrowserRouter>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Apps/>);

