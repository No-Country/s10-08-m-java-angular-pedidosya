package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.services.Impl.ClientImpl;
import com.pedidosya.api.utils.mappers.IClientMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/clients")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ClientController {

    private final ClientImpl clientImpl;
    private final IClientMapper iClientMapper;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAll(){
        return ResponseEntity.ok(convertToListDto(clientImpl.readAll()));
    }

    @PostMapping(value = "/register", headers = "Accept=application/json")
    public ResponseEntity<ClientDTO> registerClient(@RequestBody ClientDTO newClient){

        Client client = convertToEntity(newClient);

        int strength = 10;
        BCryptPasswordEncoder bCryptPasswordEncoder =
                new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPassword = bCryptPasswordEncoder.encode(newClient.getUser().getPassword());
        client.getUser().setPassword(encodedPassword);


        return  ResponseEntity.ok(
                convertToDto(clientImpl.save(client)));
    }

    @PutMapping(value = "/update", headers = "Accept=application/json")
    public ResponseEntity<ClientDTO> updateClient(@RequestBody ClientDTO newClient){

    try {

        Client client = convertToEntity(newClient);
        Client existingClient = clientImpl.readById(newClient.getIdClient());

        int strength = 10;
        BCryptPasswordEncoder bCryptPasswordEncoder =
                new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPassword = bCryptPasswordEncoder.encode(newClient.getUser().getPassword());
        client.getUser().setPassword(encodedPassword);

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

    private List<ClientDTO> convertToListDto(List<Client> clients){

        if ( clients == null ) {
            return null;
        }

        List<ClientDTO> list = new ArrayList<>();
        for ( Client c : clients ) {
            list.add( convertToDto( c ) );
        }

        return list;
    }

}
