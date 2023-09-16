package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.City;
import com.pedidosya.api.repositories.ICityRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.ICityService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CityImpl extends CRUDImpl<City,Integer> implements ICityService {

    private final ICityRepo repo;
    @Override
    protected IGenericRepo<City, Integer> getRepo() {
        return repo;
    }
}
