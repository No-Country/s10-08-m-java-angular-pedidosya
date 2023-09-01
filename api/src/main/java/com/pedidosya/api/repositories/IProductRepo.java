package com.pedidosya.api.repositories;

import com.pedidosya.api.models.Product;
import com.pedidosya.api.models.Store;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepo extends IGenericRepo<Product, Integer> {

    @Query("SELECT p.title, SUM(sd.quantity) AS totalSales " +
            "FROM SaleDetail sd " +
            "JOIN Product p ON sd.product.idProduct = p.idProduct " +
            "JOIN Sale s ON sd.sale = s.store " +
            "WHERE s.store.idStore = :idStore " +
            "GROUP BY p.idProduct " +
            "ORDER BY totalSales DESC")
    List<Product> findTopProductsByStoreOrderByTotalSalesDesc(@Param("idStore") Integer idStore);
}
