package com.pedidosya.api.services;

import com.pedidosya.api.models.Sale;
import com.pedidosya.api.models.SaleDetail;
import com.pedidosya.api.models.Store;

import java.util.List;

public interface ISaleService extends ICRUD<Sale, Integer>{

    Sale save(Sale sale, List<SaleDetail> details);

    Void changeStatus(Integer idSale, Integer idStatus);

    List<Sale> readByIdUser(Integer idUser);

}
