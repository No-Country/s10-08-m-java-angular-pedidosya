package com.pedidosya.api.dto.Request;

import jakarta.persistence.Column;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ClientDTO {

    private Integer idClient;

    @NotNull
    @NotEmpty
    @Column(length =100, nullable = false )
    @Size(min = 3, message = "Nombre min 3 caracteres.")
    private String firstName;
    @NotNull
    @NotEmpty
    @Column(length =100, nullable = false )
    @Size(min = 3, message = "Apellido min 3 caracteres.")
    private String lastName;

    @Column(nullable = false)
    private boolean active = true;
    @Valid
    private UserDTO user;


    @Override
    public String toString() {
        return "ClientDTO{" +
                "idClient=" + idClient +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", user=" + user +
                '}';
    }
}
