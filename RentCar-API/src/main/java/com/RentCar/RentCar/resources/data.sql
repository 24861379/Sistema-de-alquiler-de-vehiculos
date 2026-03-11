-- se inserta los roles en la tabla rol
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('ADMIN');
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('AGENTE');

insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('alejo@.com', 'alejo','$2a$12$awZ5M6aPubCbI1S/1Rjtj.Z.3LNneZnBFwbPXx.i2LNVkzlZY27im', 1);

--contraseña de pepito es: pepitope
insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('pepito@correo.com', 'pepito Perez','$2a$10$/rjcS8D08RtoJbcsG3wzaOfCztIaMl8z9guOrspe4xoHWaZUoRSwa', 2);