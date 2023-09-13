package com.pedidosya.api.dto.Request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SaleStatusDTO {
    private Integer idSale;
    private Integer idStatus;
}
