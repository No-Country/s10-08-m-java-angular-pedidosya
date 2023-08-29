package com.pedidosya.api.controllers;

import com.pedidosya.api.dto.Request.CityDTO;
import com.pedidosya.api.dto.Request.ProductDTO;
import com.pedidosya.api.models.City;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.Product;
import com.pedidosya.api.services.Impl.CityImpl;
import com.pedidosya.api.services.Impl.ProductImpl;
import com.pedidosya.api.utils.mappers.ICityMapper;
import com.pedidosya.api.utils.mappers.IProductMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping(path = "/cities")
@RequiredArgsConstructor
public class CityController {

    private final CityImpl cityImpl;
    private final ICityMapper iCityMapper;

    @GetMapping(path = "/getAll")
    public ResponseEntity<List<CityDTO>>getAll(){
        return ResponseEntity.ok(convertToListDto(cityImpl.readAll()));
    }

    @PostMapping(value = "/register", headers = "Accept=application/json")
    public ResponseEntity<CityDTO> registerCity(@RequestBody CityDTO newCity){
        return ResponseEntity.ok(
                convertToDto(cityImpl.save(converToEntity(newCity))));
    }

    @PutMapping(value = "/update", headers = "Accept=application/json")
    public ResponseEntity<CityDTO>updateCity(@RequestBody CityDTO newCity){
        try {
            City city = converToEntity(newCity);
            City existingCity = cityImpl.readById(newCity.getIdCity());

            if (existingCity == null){
                return ResponseEntity.notFound().build();
            }

            if (cityImpl.readById(city.getIdCity()) != null){
                return ResponseEntity.ok(convertToDto(cityImpl.update(city)));
            }
            return ResponseEntity.ok(newCity);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    //NO ESTA ELIMINANDO DE LA BASE DE DATOS - ERROR 404 NOT FOUND
    @DeleteMapping(value = "/delete/{id}", headers = "Accept=application/json")
    public ResponseEntity<Void> deleteCity(@PathVariable Integer id){
        City cityDB = cityImpl.readById(id);
        if (cityDB != null){
            cityImpl.delete(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }



    private CityDTO convertToDto(City city){return iCityMapper.toCityDto(city);}
    private City converToEntity(CityDTO cityDTO){return iCityMapper.toCity(cityDTO);}

    private List<CityDTO> convertToListDto(List<City> cities){

        if ( cities == null ) {
            return null;
        }

        List<CityDTO> list = new ArrayList<>();
        for ( City c : cities ) {
            list.add(convertToDto( c ));
        }

        return list;
    }

}
