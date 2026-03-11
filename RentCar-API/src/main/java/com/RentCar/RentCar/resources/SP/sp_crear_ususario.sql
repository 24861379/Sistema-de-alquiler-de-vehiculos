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
