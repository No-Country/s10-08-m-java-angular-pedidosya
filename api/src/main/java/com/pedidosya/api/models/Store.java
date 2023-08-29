package com.pedidosya.api.models;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Store {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idStore;

    @Column(length = 50, nullable = false)
    private String title;

    @Column(length = 15, nullable = false)
    private String phone;

    @ManyToOne
    @JoinColumn(name = "id_store_type", nullable = false, foreignKey = @ForeignKey(name= "FK_Store_Store_Type"))
    private StoreType storeType;

    @Column(nullable = false)
    private boolean active;

    @Column(nullable = true)
    private Integer ratingStore;

    @Column(length = 300, nullable = false)
    private String imagePath;

    @Column(length = 300, nullable = false)
    private String logoPath;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_address" , referencedColumnName = "idAddress")
    private Address address;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_user" , referencedColumnName = "idUser")
    private User user;

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


}
