package me.gnyalakonda.react;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    private ClientRepository clientRepository;

    @GetMapping
    public List<Client> getClients(){
        return clientRepository.findAll();
    }

    @GetMapping("{id}")
    public Client getClient(@PathVariable("id") Long id){
        return clientRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity<Client> createClient(@RequestBody Client client){
        Client savedClient = clientRepository.save(client);
        return ResponseEntity.ok(savedClient);
    }

    @PutMapping("{id}")
    public ResponseEntity<Client> updateClient(@PathVariable("id") Long id, @RequestBody Client client){
        Client currentClient = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        currentClient.setName(client.getName());
        currentClient.setEmail(client.getEmail());
        currentClient = clientRepository.save(currentClient);
        return ResponseEntity.ok(currentClient);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Client> deleteClient(@PathVariable("id") Long id){
        Client client = clientRepository.findById(id).orElseThrow(RuntimeException::new);
        clientRepository.delete(client);
        return ResponseEntity.ok(client);
    }
}
