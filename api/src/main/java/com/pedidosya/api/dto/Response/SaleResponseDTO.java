package com.pedidosya.api.dto.Response;

import com.pedidosya.api.dto.Request.SaleDetailDTO;
import com.pedidosya.api.models.Address;
import com.pedidosya.api.models.Store;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SaleResponseDTO {
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

    private Integer idUser;

    private Integer idDelivery;

    //private Integer idAddress;

    //private Integer idStore;
    private Address address;

    private Store store;

    private List<SaleDetailDTO> details;
}
