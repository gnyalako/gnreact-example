import React, { useState, useEffect, useParams } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';


const ClientList = () => {

   const [clients, setClients] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const remove = async (id) => {
       await fetch(`/clients/${id}`, {
                     method: 'DELETE',
                     headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                     }
                 }).then( () => {
                    let updateClients = [ ...clients].filter(i => i.id !== id);
                    setClients(updateClients);
                 });
   };

   useEffect(() =>{
      fetch('/clients')
         .then( (response) => response.json() )
         .then( (data) => {
         console.log(data);
         setClients(data);
         console.log(clients);
         });
   }, []);

   useEffect(() =>{
      if( clients.length !== 0){
          setIsLoading(false);
      }
   }, [clients]);

   return (


             <div>

                <Container fluid>
                    <div className="float-right">
                       <Button color="success" tag={Link} to="/clients/new">Add Client</Button>
                    </div>
                    <h3>Clients</h3>
                    <Table className="mt-4">
                        <thead>
                           <tr>
                              <th width="30%">Name</th>
                              <th width="30%">Email</th>
                              <th width="40%">Actions</th>
                           </tr>
                        </thead>
                        <tbody>
                           { clients.map( (client) =>
                                        <tr key={client.id}>
                                        <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
                                        <td>{client.email}</td>
                                        <td>
                                            <ButtonGroup>
                                               <Button size="sm" color="primary" tag={Link} to={"/clients/" + client.id}>Edit</Button>
                                               <Button size="sm" color="danger" onClick={ () => remove(client.id)}>Delete</Button>
                                            </ButtonGroup>
                                        </td>
                                        </tr>
                                     )
                            }
                        </tbody>
                    </Table>
                </Container>
             </div>

      );
}

export default ClientList;