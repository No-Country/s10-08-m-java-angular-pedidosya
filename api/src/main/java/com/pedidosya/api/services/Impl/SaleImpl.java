package com.pedidosya.api.services.Impl;

import com.pedidosya.api.models.Product;
import com.pedidosya.api.models.Sale;
import com.pedidosya.api.models.SaleDetail;
import com.pedidosya.api.models.Store;
import com.pedidosya.api.repositories.IGenericRepo;
import com.pedidosya.api.repositories.IProductRepo;
import com.pedidosya.api.repositories.ISaleRepo;
import com.pedidosya.api.services.ISaleService;
import com.pedidosya.api.services.IStoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SaleImpl extends CRUDImpl<Sale, Integer> implements ISaleService {
    private final ISaleRepo repo;
    @Override
    protected IGenericRepo<Sale, Integer> getRepo() {
        return repo;
    }

    @Transactional
    @Override
    public Sale save(Sale sale, List<SaleDetail> details) {
        return repo.save(sale);
    }
}
