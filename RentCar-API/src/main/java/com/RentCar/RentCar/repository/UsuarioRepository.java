package com.RentCar.RentCar.repository;

import com.RentCar.RentCar.entity.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {
    @Procedure("sp_login_usuario")
    List<UsuarioEntity> loginUsuario(
            @Param("p_email") String email
    );

    @Procedure("sp_crear_usuario")
    void crearUsuario(
            @Param("emailUsuario") String email,
            @Param("nombre") String nombre,
            @Param("passwordhash") String passwordhash,
            @Param("RolId") Long rolId
    );

    @Procedure("sp_obtener_usuarios")
    List<Object[]> GetUsuarios();

    @Procedure("sp_actualizar_usuario")
    void  actualizarUsuario(
            @Param("usuarioId") Long usuarioId,
            @Param("rolId") Long rolId
    );

    @Procedure("sp_eliminar_usuario")
    void eliminarUsuario (
            @Param("usuario_id") Long usuarioId
    );

}
