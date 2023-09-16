package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.CountryDTO;
import com.pedidosya.api.models.Country;
import com.pedidosya.api.services.Impl.CountryImpl;
import com.pedidosya.api.utils.mappers.ICountryMapper;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/countries")
@RequiredArgsConstructor
@SecurityRequirement(name = "jwt")
public class CountryController {

    private final CountryImpl countryImpl;
    private final ICountryMapper iCountryMapper;

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<CountryDTO>>getAll(){
        return ResponseEntity.ok(convertToListDto(countryImpl.readAll()));
    }
/*
    @PostMapping(value = "/register", headers = "Accept=application/json")
    public ResponseEntity<CountryDTO>registerCountry(@RequestBody CountryDTO newCountry){
        return ResponseEntity.ok(convertToDto((countryImpl.save(converToEntity(newCountry)))));
    }

    @PutMapping(value = "/update", headers = "Accept=application/json")
    public ResponseEntity<CountryDTO>updateCountry(@RequestBody CountryDTO newCountry){
        try {
            Country country = converToEntity(newCountry);
            Country existingCountry = countryImpl.readById(newCountry.getIdCountry());

            if (existingCountry == null){
                return ResponseEntity.notFound().build();
            }

            if (countryImpl.readById(country.getIdCountry()) != null){
                return ResponseEntity.ok(convertToDto(countryImpl.update(country)));
            }
            return ResponseEntity.ok(newCountry);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    //NO ESTA ELIMINANDO DE LA BASE DE DATOS - ERROR 404 NOT FOUND
    @DeleteMapping(value = "/delete/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteCity(@PathVariable Integer id){
        Country countryDB = countryImpl.readById(id);
        if (countryDB != null){
            countryImpl.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
*/
    private CountryDTO convertToDto(Country country){return iCountryMapper.toCountryDto(country);}
    private Country converToEntity(CountryDTO countryDTO){return iCountryMapper.toCountry(countryDTO);}

    private List<CountryDTO> convertToListDto(List<Country> countries){

        if ( countries == null ) {
            return null;
        }

        List<CountryDTO> list = new ArrayList<>();
        for ( Country c : countries ) {
            list.add(convertToDto( c ));
        }

        return list;
    }

}
