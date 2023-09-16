package com.pedidosya.api.dto.Request;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDiscountDTO {

    private Integer idProductDiscount;
    @Column(nullable = true)
    private double percentage;

}