package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.FavouriteProduct;
import com.pedidosya.api.models.FavouriteStore;
import com.pedidosya.api.repositories.IFavouriteProductRepo;
import com.pedidosya.api.repositories.IFavouriteStoreRepo;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.services.IFavouriteProductService;
import com.pedidosya.api.services.IFavouriteStoreService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class FavouriteProductImpl extends CRUDImpl<FavouriteProduct, Integer> implements IFavouriteProductService {
    private final IFavouriteProductRepo repo;
    @Override
    protected IGenericRepo<FavouriteProduct, Integer> getRepo() {
        return repo;
    }

    @Transactional
    @Override
    public Void save(Integer idUser, Integer idProduct)
    {
        repo.save(idUser, idProduct);
        return null;
    }

    @Transactional
    @Override
    public Void remove(Integer idUser, Integer idProduct)
    {
        repo.remove(idUser, idProduct);
        return null;
    }

}
