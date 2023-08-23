package com.pedidosya.api.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Payment {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idPayment;

    @Column(nullable = false)
    private LocalDateTime dateCreated;

    @Column(nullable = false)
    private LocalDateTime dateApproved;
    @Column(length = 20, nullable = false)
    private String paymentTypeId;

    @Column(length = 15, nullable = false)
    private String currencyId;

    @Column(length = 30, nullable = false)
    private String transactionId;

    @Column(length = 30, nullable = false)
    private String payerId;

    @Column(length = 15, nullable = false)
    private String payerNumber;

    @Column(length = 15, nullable = false)
    private String transactionAmount;
    @Column(length = 15, nullable = false)
    private String transactionAmountRefunded;

    @Column(length = 15, nullable = false)
    private String couponAmount;
    @Column(length = 50, nullable = false)
    private String externalReference;
    @Column(length = 15, nullable = false)
    private String paymentStatus;

    @Column(length = 15, nullable = false)
    private String paymentMethodId;

    @Column(length = 15, nullable = false)
    private String paymentStatusDetails;

    @Column(length = 500, nullable = false)
    private String ticketUrl;
    @ManyToOne
    @JoinColumn(name = "id_sale", nullable = false, foreignKey = @ForeignKey(name= "FK_Sale_Payment"))
    private Sale sale;
}
