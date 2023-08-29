package com.pedidosya.api.dto.Request;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CountryDTO {

    private Integer idCountry;

    @Column(length = 50, nullable = false)
    private String title;

    @Override
    public String toString() {
        return "CountryDTO{" +
                "idCountry=" + idCountry +
                ", title='" + title + '\'' +
                '}';
    }
}
