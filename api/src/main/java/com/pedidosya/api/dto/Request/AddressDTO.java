package com.pedidosya.api.dto.Request;

import com.pedidosya.api.models.City;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.locationtech.jts.geom.Point;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressDTO {
    private Integer idAddress;
    @NotNull
    @NotEmpty
    @Column(length =300 )
    private String description;
    //@NotNull
    //private Point coordinates;

    private Double latitude;

    private Double longitude;

    private CityDTO city;
}
