package com.pedidosya.api.services.Impl;

import com.pedidosya.api.dto.Request.MenuDTO;
import com.pedidosya.api.models.Client;
import com.pedidosya.api.models.Country;
import com.pedidosya.api.models.Province;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.repositories.ICountryRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.repositories.IStoreRepo;
import com.pedidosya.api.services.ICRUD;
import com.pedidosya.api.services.IStoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StoreImpl extends CRUDImpl<Store, Integer> implements IStoreService {
    private final IStoreRepo repo;
    @Override
    protected IGenericRepo<Store, Integer> getRepo() {
        return repo;
    }

   @Override
   public Store findByIdStore( Integer idStore) {
       return repo.findById(idStore).orElse(null);
   }

   @Override
    public  List<Store> findByStoreType(Integer idStoreType){
        return repo.findByStoreType(idStoreType);
   }

   @Override
    public Boolean findByFavourite(Integer idStore, Integer idUser){
       return repo.findByFavourite(idStore, idUser) != null;
   }
    @Override
    public  List<Store> findByStoreFavourite(Integer idUser){
        return repo.findByStoreFavourite(idUser);
    }

}
