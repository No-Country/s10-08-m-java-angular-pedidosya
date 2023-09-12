package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.models.StoreType;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.repositories.IStoreRepo;
import com.pedidosya.api.repositories.IStoreTypeRepo;
import com.pedidosya.api.services.IStoreService;
import com.pedidosya.api.services.IStoreTypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StoreTypeImpl extends CRUDImpl<StoreType, Integer> implements IStoreTypeService {
    private final IStoreTypeRepo repo;
    @Override
    protected IGenericRepo<StoreType, Integer> getRepo() {
        return repo;
    }


}
