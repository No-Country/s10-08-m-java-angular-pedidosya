package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.*;
import com.pedidosya.api.repositories.ICountryRepo;
import com.pedidosya.api.repositories.IFavouriteStoreRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.IFavouriteStoreService;
import com.pedidosya.api.services.IMenuService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class FavouriteStoreImpl  extends CRUDImpl<FavouriteStore, Integer> implements IFavouriteStoreService {
    private final IFavouriteStoreRepo repo;
    @Override
    protected IGenericRepo<FavouriteStore, Integer> getRepo() {
        return repo;
    }

    @Transactional
    @Override
    public Void save(Integer idUser, Integer idStore)
    {
        repo.save(idUser, idStore);
        return null;
    }

    @Transactional
    @Override
    public Void remove(Integer idUser, Integer idStore)
    {
        repo.remove(idUser, idStore);
        return null;
    }

}
