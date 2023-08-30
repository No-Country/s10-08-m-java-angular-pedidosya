package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.AuthUserDto;
import com.pedidosya.api.dto.Response.JwtResponseDto;
import com.pedidosya.api.services.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping(path = "/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    private final IAuthService iAuthService;

    @PostMapping(path = "/sign-in")
    public ResponseEntity<JwtResponseDto> signIn(@RequestBody AuthUserDto authUserDto){
        return ResponseEntity.ok(iAuthService.signIn(authUserDto));
    }

    @PostMapping(path = "/sign-out")
    public ResponseEntity<JwtResponseDto> signOut(@RequestHeader(name = HttpHeaders.AUTHORIZATION) String jwt) {
        return ResponseEntity.ok(iAuthService.signOut(jwt));
    }


}
