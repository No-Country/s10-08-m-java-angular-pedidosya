package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Country;
import com.pedidosya.api.repositories.ICountryRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.ICountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CountryImpl extends CRUDImpl<Country, Integer> implements ICountryService {

    private final ICountryRepo repo;
    @Override
    protected IGenericRepo<Country, Integer> getRepo() {
        return repo;
    }
}
