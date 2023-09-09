package com.pedidosya.api.dto.Request;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.pedidosya.api.models.Store;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class MenuDTO {
    private Integer idMenu;

    @Column(length = 50, nullable = false)
    private String title;

    private Integer idStore;

   @JsonManagedReference
   @NotNull
    private List<ProductDTO> products;

}
