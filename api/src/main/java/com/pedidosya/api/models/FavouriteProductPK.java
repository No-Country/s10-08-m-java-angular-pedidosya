package com.pedidosya.api.models;

import jakarta.persistence.Embeddable;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;

import java.io.Serializable;
@EqualsAndHashCode
@Embeddable
public class FavouriteProductPK implements Serializable {
    @ManyToOne
    @JoinColumn(name = "id_user", nullable = false, foreignKey = @ForeignKey(name = "FK_FavouriteProduct_User"))
    private User user;
    @ManyToOne
    @JoinColumn(name = "id_product", nullable = false, foreignKey = @ForeignKey(name = "FK_FavouriteProduct_Product"))
    private Product product;
}
