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
public class AuthUserDto {
    @NotEmpty
    @NotNull
    @Column(nullable = false)
    private String email;
    @NotEmpty
    @NotNull
    @Column(nullable = false)
    private String password;
}
