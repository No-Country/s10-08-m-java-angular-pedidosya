package com.pedidosya.api.controllers;

import com.pedidosya.api.services.Impl.ProvinceImpl;
import com.pedidosya.api.utils.mappers.IProvinceMapper;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/provinces")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class ProvinceController {

    private final ProvinceImpl provinceImpl;
    private final IProvinceMapper provinceMapper;



}