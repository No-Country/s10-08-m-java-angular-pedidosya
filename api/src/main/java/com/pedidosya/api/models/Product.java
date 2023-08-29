package com.pedidosya.api.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Product {

    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProduct;

    @Column(length = 30, nullable = false)
    private String title;

    @Column(length = 1000, nullable = false)
    private String description;

    @Column(columnDefinition = "decimal(18,4)" , nullable = false)
    private double price;

    @Column(length = 300, nullable = false)
    private String imagePath;

    @Column(nullable = false)
    private boolean active = true;

    @ManyToOne
    @JoinColumn(name = "id_product_type", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_Product_Type"))
    private ProductType productType;

    @ManyToOne
    @JoinColumn(name = "id_menu", nullable = false, foreignKey = @ForeignKey(name= "FK_Product_Menu"))
    private Menu menu;


}
