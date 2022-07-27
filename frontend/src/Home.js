import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import AppNavbar from './AppNavbar';
import { Button, Container } from 'reactstrap';

const Home = () => {
       return (
          <div>

             <Container fluid>
                 <Button color="link"><Link to="/clients">Clients</Link></Button>
             </Container>
          </div>
       );
   };


export default Home;