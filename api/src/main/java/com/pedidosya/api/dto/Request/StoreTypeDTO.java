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
public class StoreTypeDTO {
    private Integer idStoreType;
    @Column(length = 30, nullable = false)
    private String title;

    @Column(length = 300, nullable = false)
    private String image_path;
}
