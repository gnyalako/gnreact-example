import logo from './logo.svg';
import './App.css';
import React, { StrictMode } from 'react';
import Home from './Home';
import ClientList from './ClientList';
import ClientEdit from './ClientEdit';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AppNavbar from './AppNavbar';

const App = () => {
   return (
          <StrictMode>
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
          </StrictMode>
         );
};

/*
class App extends Component {
   render() {
       return (
          <BrowserRouter>
             <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/clients'  element={<ClientList/>}/>
                <Route path='/clients/:id' element={<ClientEdit/>}/>
             </Routes>
          </BrowserRouter>
       );
   }
}
*/
/*
class App extends Component {
  state = {
     clients: []
  };

  async componentDidMount(){
     const response = await fetch('/clients');
     const body = await response.json();
     this.setState({clients: body});
  }

  render(){
     const {clients} = this.state;
     return (
        <div className="App">
            <header className="App-header">

               <div className="App-intro">
                  <h2>Clients</h2>
                  {clients.map(client =>
                     <div key="{client.id}">
                        {client.name} ({client.email})
                     </div>
                  )}
               </div>
            </header>
        </div>
     );
  }
}

*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
