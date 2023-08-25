package com.pedidosya.api.models;

import jakarta.persistence.Embeddable;
import jakarta.persistence.ForeignKey;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.EqualsAndHashCode;

import java.io.Serializable;

@EqualsAndHashCode
@Embeddable
public class AddressClientPK implements Serializable {

    @ManyToOne
    @JoinColumn(name = "id_client", nullable = false, foreignKey = @ForeignKey(name = "FK_AddressClient_Client"))
    private Client client;
    @ManyToOne
    @JoinColumn(name = "id_address", nullable = false, foreignKey = @ForeignKey(name = "FK_AddressClient_Address"))
    private Address address;

}
