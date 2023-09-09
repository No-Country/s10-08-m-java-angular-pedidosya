package com.pedidosya.api.dto.Request;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.pedidosya.api.models.Menu;
import com.pedidosya.api.models.ProductType;
import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDTO {

    private Integer idProduct;

    @Column(length = 30, nullable = false)
    private String title;

    @Column(length = 1000, nullable = false)
    private String description;

    @Column(columnDefinition = "decimal(18,4)" , nullable = false)
    private double price;

    @Column(length = 300, nullable = false)
    private String imagePath;

    private ProductType productType;

    @Column(nullable = false)
    private boolean active = true;
    //@JsonBackReference

    @JsonBackReference
    private Menu menu;

    private Boolean isFavourite;

    @Override
    public String toString() {
        return "ProductDTO{" +
                "idProduct=" + idProduct +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", imagePath='" + imagePath + '\'' +
                ", productType=" + productType +
                ", active=" + active +
                ", menu=" + menu +
                '}';
    }
}
