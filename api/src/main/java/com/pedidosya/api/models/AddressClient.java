package com.pedidosya.api.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@IdClass(AddressClientPK.class)
public class AddressClient {
    @Id
    private Client client;
    @Id
    private Address address;

    @Column(nullable = false)
    private boolean set;
}
