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
