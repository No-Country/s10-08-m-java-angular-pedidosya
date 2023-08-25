package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.services.Impl.ClientImpl;
import com.pedidosya.api.utils.mappers.IClientMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/clients")
@RequiredArgsConstructor
public class ClientController {

    private final ClientImpl clientImpl;
    private final IClientMapper iClientMapper;

    @PostMapping(value = "/register", headers = "Accept=application/json")
    public ResponseEntity<ClientDTO> registerClient(@RequestBody ClientDTO newClient){
        return  ResponseEntity.ok(
                convertToDto(clientImpl.save(convertToEntity(newClient))));
    }

    @PutMapping(value = "/update", headers = "Accept=application/json")
    public ResponseEntity<ClientDTO> updateClient(@RequestBody ClientDTO newClient){

    try {

        Client client = convertToEntity(newClient);
        Client existingClient = clientImpl.readById(newClient.getIdClient());

        if(existingClient==null){
            return ResponseEntity.notFound().build();
        }

        if(!existingClient.isActive()){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }



        if (clientImpl.readById(client.getIdClient()) != null){
            return  ResponseEntity.ok(
                    convertToDto(clientImpl.update(client)));

            // return ResponseEntity.ok(convertToDto(clientImpl.save(existingClient)));

        }

        return ResponseEntity.ok(newClient);
    }
    catch (Exception e){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    }


    @DeleteMapping(value = "/delete/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteClient(@PathVariable Integer id){

        try{

        Client existingClient = clientImpl.readById(id);

        if(existingClient==null){
                return ResponseEntity.notFound().build();
        }

        if(!existingClient.isActive()){
                return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }


        Client client = clientImpl.readById(id);
        client.setActive(false);
        clientImpl.save(client);
        return ResponseEntity.noContent().build();
        }

        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

    }


    private ClientDTO convertToDto(Client client){
        return iClientMapper.toClientDto(client);
    }

    private Client convertToEntity(ClientDTO clientDTO){
        return iClientMapper.toClient(clientDTO);
    }

}
