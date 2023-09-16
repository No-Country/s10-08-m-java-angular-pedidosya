package com.pedidosya.api.dto.Request;

import com.pedidosya.api.models.Country;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProvinceDTO {

    private Integer idProvince;

    @Column(length = 50, nullable = false)
    private String title;

    private Country country;

    @Override
    public String toString() {
        return "ProvinceDTO{" +
                "idProvince=" + idProvince +
                ", title='" + title + '\'' +
                ", country=" + country +
                '}';
    }
}
