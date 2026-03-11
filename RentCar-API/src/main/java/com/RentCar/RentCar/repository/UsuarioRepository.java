package com.RentCar.RentCar.repository;

import com.RentCar.RentCar.entity.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {
    @Procedure("sp_login_usuario")
    UsuarioEntity loginUsuario(@Param("p_email") String email);

    @Procedure("sp_crear_usuario")
    void crearUsuario(@Param("emailUsuario") String email,
                               @Param("nombre") String nombre,
                               @Param("passwordhash") String passwordhash,
                               @Param("RolId") Long rolId);
}
