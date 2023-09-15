package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.AddressClientDTO;
import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.dto.Request.EmailDTO;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.User;
import com.pedidosya.api.services.Impl.ClientImpl;
import com.pedidosya.api.utils.mappers.IClientMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/clients")
@RequiredArgsConstructor
//@CrossOrigin(origins = "*")
@SecurityRequirement(name = "jwt")
public class ClientController {

    private final ClientImpl clientImpl;

    private final IClientMapper iClientMapper;

    @GetMapping
    public ResponseEntity<List<ClientDTO>> getAll(){
        return ResponseEntity.ok(convertToListDto(clientImpl.readAll()));
    }

//    @PostMapping(value = "/register", headers = "Accept=application/json")
//    public ResponseEntity<ClientDTO> registerClient(@RequestBody ClientDTO newClient){
//
//        Client client = convertToEntity(newClient);
//
//        int strength = 10;
//        BCryptPasswordEncoder bCryptPasswordEncoder =
//                new BCryptPasswordEncoder(strength, new SecureRandom());
//        String encodedPassword = bCryptPasswordEncoder.encode(newClient.getUser().getPassword());
//        client.getUser().setPassword(encodedPassword);
//
//
//        return  ResponseEntity.ok(
//                convertToDto(clientImpl.save(client)));
//    }

    @PutMapping(value = "/update", headers = "Accept=application/json")
    public ResponseEntity<ClientDTO> updateClient(@Valid @RequestBody ClientDTO newClient){

    try {

        Client client = convertToEntity(newClient);
        Client existingClient = clientImpl.readById(newClient.getIdClient());
       /* int strength = 10;
        BCryptPasswordEncoder bCryptPasswordEncoder =
                new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPassword = bCryptPasswordEncoder.encode(newClient.getUser().getPassword());
        client.getUser().setPassword(encodedPassword);
*/
        if(existingClient==null){
            return ResponseEntity.notFound().build();
        }

        if(!existingClient.isActive()){
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body(null);
        }



        if (clientImpl.readById(client.getIdClient()) != null){
            existingClient.setFirstName(client.getFirstName());
            existingClient.setLastName(client.getLastName());
            return  ResponseEntity.ok(
                    convertToDto(clientImpl.updatePerfil(existingClient)));
        }

        return ResponseEntity.ok(newClient);
    }
    catch (Exception e){
        System.out.println(e.getMessage());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    }

    }

    @GetMapping("/{id}")
    public ResponseEntity<ClientDTO> findById(@PathVariable("id") Integer id){
        ClientDTO dto = this.convertToDto(clientImpl.readById(id));
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/user")
    public ResponseEntity<ClientDTO> findById(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        User user = (User) authentication.getPrincipal();
        Integer userId = user.getIdUser();
        ClientDTO dto = this.convertToDto(clientImpl.readByIdUser(userId));
        return new ResponseEntity<>(dto, HttpStatus.OK);
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


    @Operation(summary="Verifica si ya existe ese correo registrado.")
    @PostMapping(value="/verify", headers = "Accept=application/json")
    public ResponseEntity<Boolean> verifyEmail(@RequestBody EmailDTO maildto)
    {
        return new ResponseEntity<>(clientImpl.verifyEmail(maildto.getEmail()), HttpStatus.OK);
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
