package com.pedidosya.api.dto.Request;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
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
    @Column(length =100 )
    private String firstName;

    @Column(length =100 )
    private String lastName;

    private UserDTO user;
}
