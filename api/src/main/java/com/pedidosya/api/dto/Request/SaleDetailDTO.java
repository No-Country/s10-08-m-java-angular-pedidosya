package com.pedidosya.api.dto.Request;

import com.pedidosya.api.models.Product;
import com.pedidosya.api.models.Sale;
import jakarta.persistence.Column;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SaleDetailDTO {
    private Integer idSaleDetail;
    private Integer idProduct;
    @Column(nullable = false)
    private Integer quantity;

    @Column(columnDefinition = "decimal(18,4)" , nullable = false)
    private double amount;

    @Column(nullable = true)
    private Integer productRating;

}
