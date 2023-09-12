package com.pedidosya.api.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Sale {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idSale;

    @Column(nullable = false)
    private LocalDateTime saleDate;

    @Column(nullable = false, length = 10)
    private Integer status;
    @Column(columnDefinition = "decimal(18,4)" , nullable = false)
    private double amount;

    @Column(nullable = true)
    private Integer storeRating;
    @Column(nullable = true)
    private Boolean deliveryRating;

    @Column(nullable = true)
    private String deliveryReview;


    @ManyToOne
    @JoinColumn(name = "id_client", nullable = false, foreignKey = @ForeignKey(name= "FK_Sale_Client"))
    private Client client;

    @ManyToOne
    @JoinColumn(name = "id_delivery", nullable = false, foreignKey = @ForeignKey(name= "FK_Sale_Delivery"))
    private Delivery delivery;
    @ManyToOne
    @JoinColumn(name = "id_address", nullable = false, foreignKey = @ForeignKey(name= "FK_Sale_Address"))
    private Address address;

    @ManyToOne
    @JoinColumn(name = "id_store", nullable = false, foreignKey = @ForeignKey(name= "FK_Sale_Store"))
    private Store store;

    @OneToMany(mappedBy = "sale", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<SaleDetail> details;
}
