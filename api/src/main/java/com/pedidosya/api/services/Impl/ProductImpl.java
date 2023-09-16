package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Product;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.repositories.IProductRepo;
import com.pedidosya.api.services.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductImpl extends CRUDImpl<Product, Integer> implements IProductService {

    private final IProductRepo repo;
    @Override
    protected IGenericRepo<Product, Integer> getRepo() {
        return repo;
    }

    public List<Product> getTopProduct(Integer idStore){
        return repo.findTopProductsByStoreOrderByTotalSalesDesc(idStore);
    }
}
