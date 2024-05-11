import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'


import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import {Book,SearchBar,BookDetail } from './Components/screenElements';
import styles from './styles/bootstrapp.module.css'

import { BrowserRouter as Router, Routes,Route,Link,NavLink,useNavigate } from "react-router-dom";
import Home from './Routes/Home'
import Search from './Routes/Search'
import BookSummary from './Routes/BookSummary'
import About from './Routes/About'
import ContactUs from './Routes/Contact Us'
import Table from './Routes/Table'
import Graph from './Routes/Graph'
import Logo from './logo.svg'



const activeStyle = {
  forntWeight: "bold",
  color:"purple"
}

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <div className="App">
        <Navbar.Brand href="/">
          <img alt="logo" src={Logo} width="30" height="30" className="d-inline-block align-top"/>
          {' '}
          Knockoff Google Books
        </Navbar.Brand>          
        <NavLink to="/About" style={({isActive})=>(isActive? activeStyle:null)}>About</NavLink>
        {' '}
        <NavLink to="/ContactUs" style={({isActive})=>(isActive? activeStyle: null)}>Contact Us</NavLink> 
       </div>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search/:search" element={<Search/>}/>
        <Route path="/books/:title" element={<BookSummary/>} />  
        <Route path="/table/:search" element={<Table/>} />  
        <Route path="/graph/:search" element={<Graph/>} />  
        <Route path="/About" element={<About/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
