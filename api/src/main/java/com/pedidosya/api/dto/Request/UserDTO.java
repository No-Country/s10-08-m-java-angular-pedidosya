package com.pedidosya.api.dto.Request;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Column;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Integer idUser;
    @NotNull
    @Email
    @NotEmpty
    @Column(unique = true, nullable = false)
    private String email;

    @NotNull
    @NotEmpty
    @Column(nullable = false )
    @Size(min = 1, message = "Contraseña min 6 caracteres.")
    //@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private String password;

    @NotNull
    @NotEmpty
    @Column(length = 1,nullable = false)
    private String role;

    @Override
    public String toString() {
        return "UserDTO{" +
                "idUser=" + idUser +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
