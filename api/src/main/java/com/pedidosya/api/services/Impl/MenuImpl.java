package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Menu;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.repositories.IMenuRepo;
import com.pedidosya.api.repositories.IStoreRepo;
import com.pedidosya.api.services.IMenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuImpl extends CRUDImpl<Menu, Integer> implements IMenuService {
    private final IMenuRepo repo;
    @Override
    protected IGenericRepo<Menu, Integer> getRepo() {
        return repo;
    }

    @Override
    public List<Menu> listMenuByStore(Integer idStore) {
        return repo.findByStore(idStore);
    }
    @Override
    public Boolean findByFavourite(Integer idProduct, Integer idUser){
        return repo.findByFavourite(idProduct, idUser) != null;
    }
    @Override
    public List<Menu> listMenuByStoreAndDiscount(Integer idStore){
        return repo.listMenuByStoreAndDiscount(idStore);
    }

}
