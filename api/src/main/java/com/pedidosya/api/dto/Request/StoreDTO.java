package com.pedidosya.api.dto.Request;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.StoreType;
import com.pedidosya.api.models.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StoreDTO {
    private Integer idStore;
    @Column(length = 50, nullable = false)
    private String title;

    @Column(length = 15, nullable = false)
    private String phone;

    private StoreTypeDTO storeType;

    @Column(nullable = false)
    private boolean active;

    @Column(nullable = true)
    private Integer ratingStore;

    @Column(length = 300, nullable = false)
    private String imagePath;

    @Column(length = 300, nullable = false)
    private String logoPath;

    private AddressDTO address;

    private Integer idUser;

    @Column(columnDefinition = "decimal(18,4)" , nullable = true)
    private double shippingCost;

    @Column(nullable = true)
    private Integer minPurchase;

    //int en minutos
    @Column(nullable = true)
    private Integer timeFrom;

    //int en minutos
    @Column(nullable = true)
    private Integer timeTo;


    @JsonManagedReference
    @NotNull
    @OneToMany(mappedBy = "store", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<MenuDTO> menus;

}
