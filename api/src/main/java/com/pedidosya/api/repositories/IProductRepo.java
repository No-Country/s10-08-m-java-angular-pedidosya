package com.pedidosya.api.repositories;

import com.pedidosya.api.models.Product;
import com.pedidosya.api.models.Store;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepo extends IGenericRepo<Product, Integer> {

   /* @Query(" FROM Product p " +
            "JOIN SaleDetail p ON sd.product.idProduct = p.idProduct " +
            "JOIN Sale s ON sd.sale = s.store " +
            "GROUP BY p.idProduct " +
            "HAVING s.store.idStore = :idStore " +
            "ORDER BY totalSales DESC")
    List<Product> findTopProductsByStoreOrderByTotalSalesDesc(@Param("idStore") Integer idStore);
*/
   @Query("SELECT p " +
           "FROM Product p " +
           "JOIN SaleDetail sd ON p.idProduct = sd.product.idProduct " +
           "JOIN Sale s ON sd.sale.idSale = s.idSale " +
           "WHERE s.store.idStore = :idStore " +
           "GROUP BY p.idProduct " +
           "ORDER BY SUM(sd.quantity) DESC")
   List<Product> findTopProductsByStoreOrderByTotalSalesDesc(@Param("idStore") Integer idStore);

}


