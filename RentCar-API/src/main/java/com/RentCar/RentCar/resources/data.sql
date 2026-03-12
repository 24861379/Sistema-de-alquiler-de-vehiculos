-- se inserta los roles en la tabla rol
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('ADMIN');
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('AGENTE');

--contraseña de pepito es: alejoren
insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('alejo@rentcar.com', 'alejo','$2a$12$N4kBImnPCoLcUDedzfjm4ODfjcxoOzceK2LFE/KFTlLqtGh/DgmqS', 1);

--contraseña de pepito es: pepitope
insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('pepito@rentcar.com', 'pepito Perez','$2a$10$/rjcS8D08RtoJbcsG3wzaOfCztIaMl8z9guOrspe4xoHWaZUoRSwa', 2);