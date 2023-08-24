package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.services.Impl.ClientImpl;
import com.pedidosya.api.utils.mappers.IClientMapper;
import lombok.RequiredArgsConstructor;
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

        Client client = convertToEntity(newClient);
        if (clientImpl.readById(client.getIdClient()) != null){
            return  ResponseEntity.ok(
                    convertToDto(clientImpl.update(client)));
        }
        return ResponseEntity.ok(newClient);
    }

    @DeleteMapping(value = "/delete/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteClient(@PathVariable Integer id){
//        Client client = clientImpl.readById(id);
//
//        if (client != null){
//
//            client.setActive(false);
//
//            return  ResponseEntity.ok(
//                    convertToDto(clientImpl.save(client));
//        }
//        return ResponseEntity.ok(new ClientDTO());
        Client client = clientImpl.readById(id);
        client.setActive(false);
        clientImpl.save(client);
        return ResponseEntity.noContent().build();

    }


    private ClientDTO convertToDto(Client client){
        return iClientMapper.toClientDto(client);
    }

    private Client convertToEntity(ClientDTO clientDTO){
        return iClientMapper.toClient(clientDTO);
    }

}
