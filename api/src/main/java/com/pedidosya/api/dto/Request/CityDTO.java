package com.pedidosya.api.dto.Request;

import com.pedidosya.api.models.Country;
import com.pedidosya.api.models.Province;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CityDTO {

    private Integer idCity;

    @Column(length = 50, nullable = false)
    private String title;

    private Province province;

    @Override
    public String toString() {
        return "CityDTO{" +
                "idCity=" + idCity +
                ", title='" + title + '\'' +
                ", province=" + province +
                '}';
    }
}
