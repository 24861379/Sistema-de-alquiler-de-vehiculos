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