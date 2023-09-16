package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Province;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.repositories.IProvinceRepo;
import com.pedidosya.api.services.IProvinceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProvinceImpl extends CRUDImpl<Province, Integer> implements IProvinceService {

    private final IProvinceRepo repo;

    @Override
    protected IGenericRepo<Province, Integer> getRepo() {
        return repo;
    }
}
