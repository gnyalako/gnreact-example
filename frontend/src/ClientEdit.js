import React, { useState, useEffect  } from 'react';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link, useNavigate, useParams  } from 'react-router-dom';
import AppNavbar from './AppNavbar.js';
import withLocation from './withLocation';

const ClientEdit = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [item, setItem] = useState({
                                           name: '',
                                           email: ''
                                        });
    useEffect( () =>{
        console.log(params);
        async function fetchData() {
          if( params.id !== 'new' ){
             const client = await ( await fetch(`/clients/${params.id}`) ).json();
             setItem(client);
          }
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
          const target = event.target;
          const value = target.value;
          const name = target.name;
          let data = {...item};
          data[name] = value;
          setItem(data);
    }

    const handleSubmit = async (event) => {
         // const navigate = useNavigate();
          event.preventDefault();
          console.log(item);
          console.log(event);

          await fetch('/clients' + (item.id ? '/' + item.id : ''), {
             method: (item.id) ? 'PUT': 'POST',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             },
             body: JSON.stringify(item)
          });
           navigate('/clients', { replace: true });
       }

       return (<div>

                <Container>
                    <h2>{item.id ? 'Edit Client' : 'Add Client'}</h2>
                    <Form onSubmit={handleSubmit}>
                       <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''} onChange={handleChange} autoComplete="name" />
                       </FormGroup>
                       <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''} onChange={handleChange} autoComplete="email" />
                       </FormGroup>
                       <FormGroup>
                          <Button color="primary" type="submit">Save</Button>
                          <Button color="secondary" tag={Link} to="/clients">Cancel</Button>
                       </FormGroup>
                    </Form>
                </Container>
              </div>
              );


}

export default withLocation(ClientEdit);