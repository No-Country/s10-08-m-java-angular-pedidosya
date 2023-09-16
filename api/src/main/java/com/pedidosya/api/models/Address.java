package com.pedidosya.api.models;

import jakarta.persistence.*;
import lombok.*;
import org.locationtech.jts.geom.Point;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Address {
    @EqualsAndHashCode.Include
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idAddress;

    @Column(length = 300, nullable = false)
    private String description;

    //@Column(columnDefinition = "Point")
    //private Point coordinates;


    private Double latitude;

    private Double longitude;
    @ManyToOne
    @JoinColumn(name = "id_city", nullable = false, foreignKey = @ForeignKey(name= "FK_Address_City"))
    private City city;
}
