DROP PROCEDURE IF EXISTS sp_crear_usuario;
CREATE PROCEDURE `sp_crear_usuario` (
    IN emailUsuario varchar(100),
    IN nombre varchar(50),
    IN passwordhash varchar(60),
    IN RolId INT
)
BEGIN
insert into usuario(email, nombre, password_hash, id_rol)
values (emailUsuario, nombre, passwordhash, RolId);
END

---------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS sp_login_usuario;
CREATE PROCEDURE `sp_login_usuario` (
    IN p_email VARCHAR(100))
BEGIN
SELECT
    u.id_usuario,
    u.nombre,
    u.email,
    u.password_hash,
    u.id_rol,
    r.nombre_rol
FROM usuario u
         INNER JOIN rol r ON u.id_rol = r.id_rol
WHERE u.email = p_email;
END

---------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS sp_obtener_usuarios;

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_obtener_usuarios`()
BEGIN
SELECT
    u.id_usuario,
    u.nombre,
    u.email,
    r.nombre_rol
FROM usuario u
         INNER JOIN rol r ON u.id_rol = r.id_rol;
END
--------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS sp_actualizar_usuario;

CREATE PROCEDURE `sp_actualizar_usuario` (
    in usuarioId INT,
    in rolId INT
)
BEGIN
update usuario
set id_rol = rolId
where id_usuario = usuarioId;

END

--------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS sp_eliminar_usuario;

CREATE PROCEDURE `sp_eliminar_usuario` (
    In usuario_id INT
)
BEGIN
delete from usuario
where id_usuario = usuario_id;
END

--------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------
DROP PROCEDURE IF EXISTS sp_listar_vehiculos;

CREATE PROCEDURE sp_listar_vehiculos()
BEGIN
SELECT
    v.id_vehiculo,
    v.marca,
    v.modelo,
    t.tipo_vehiculo AS tipo,
    v.ano,
    v.placa AS matricula,
    v.cantidad_puestos AS puestos,
    v.costo_dia AS precio_dia,
    v.estado
FROM vehiculo v
         INNER JOIN tipo_vehiculo t
                    ON v.id_tipo_vehiculo = t.id_tipo_vehiculo;
END;

--------------------------------------------------------------------

CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_clientes`(
in nombreCliente varchar(50),
in apellidoCliente varchar(50),
in correo varchar(20),
in telefono varchar(10),
in direccion varchar(50)
)
BEGIN
insert into cliente(apellido_cliente, direccion, email, nombre_cliente, telefono)
values(apellidoCliente, direccion, correo, nombreCliente, telefono);
END
