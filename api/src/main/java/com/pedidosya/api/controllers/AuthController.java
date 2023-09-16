package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.AuthUserDto;
import com.pedidosya.api.dto.Request.ClientDTO;
import com.pedidosya.api.dto.Response.JwtResponseDto;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.services.IAuthService;
import com.pedidosya.api.services.Impl.ClientImpl;
import com.pedidosya.api.utils.mappers.IClientMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.security.SecureRandom;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/auth")
@CrossOrigin(origins = "*")
@SecurityRequirement(name = "jwt")
public class AuthController {

    private final IAuthService iAuthService;
    private final ClientImpl clientImpl;
    private final IClientMapper iClientMapper;


    @PostMapping(value = "/registerClient", headers = "Accept=application/json")
    public ResponseEntity<ClientDTO> registerClient(@Valid @RequestBody ClientDTO newClient){

        Client client = convertToEntity(newClient);

        int strength = 10;
        BCryptPasswordEncoder bCryptPasswordEncoder =
                new BCryptPasswordEncoder(strength, new SecureRandom());
        String encodedPassword = bCryptPasswordEncoder.encode(newClient.getUser().getPassword());
        client.getUser().setPassword(encodedPassword);


        return  ResponseEntity.ok(
                convertToDto(clientImpl.save(client)));
    }

    @PostMapping(path = "/sign-in")
    public ResponseEntity<JwtResponseDto> signIn(@RequestBody AuthUserDto authUserDto){
        return ResponseEntity.ok(iAuthService.signIn(authUserDto));
    }

    @PostMapping(path = "/sign-out")
    public ResponseEntity<JwtResponseDto> signOut(@RequestHeader(name = HttpHeaders.AUTHORIZATION) String jwt) {
        return ResponseEntity.ok(iAuthService.signOut(jwt));
    }

    @Operation(summary="Verifica si ya existe ese correo registrado.")
    @GetMapping(value="/verify/{email}", headers = "Accept=application/json")
    public ResponseEntity<Boolean> verifyEmail(@Valid @PathVariable String email)
    {
        //        return new ResponseEntity<>(clientImpl.verifyEmail(maildto.getEmail()), HttpStatus.OK);
        return new ResponseEntity<>(clientImpl.verifyEmail(email.trim()), HttpStatus.OK);
    }




    private ClientDTO convertToDto(Client client){
        return iClientMapper.toClientDto(client);
    }

    private Client convertToEntity(ClientDTO clientDTO){
        return iClientMapper.toClient(clientDTO);
    }

}
