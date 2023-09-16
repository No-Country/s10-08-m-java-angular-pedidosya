package com.pedidosya.api.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class SaleDetail {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSaleDetail;

    @ManyToOne
    @JoinColumn(name = "id_product", nullable = false, foreignKey = @ForeignKey(name= "FK_SaleDetail_Product"))
    private Product product;
    @Column(nullable = false)
    private Integer quantity;

    @Column(columnDefinition = "decimal(18,4)" , nullable = false)
    private double amount;

    @Column(nullable = true)
    private Integer productRating;

    @ManyToOne
    @JoinColumn(name = "id_sale", nullable = false, foreignKey = @ForeignKey(name= "FK_SaleDetail_Sale"))
    private Sale sale;

}
