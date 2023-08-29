package com.pedidosya.api.dto.Request;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddressClientDTO {
    private ClientDTO client;
    private AddressDTO address;
    @NotNull
    private boolean set;
}
