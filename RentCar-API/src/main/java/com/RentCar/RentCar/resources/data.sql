-- se inserta los roles en la tabla rol
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('ADMIN');
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('AGENTE');

insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('alejo@.com', 'alejo','$2a$12$awZ5M6aPubCbI1S/1Rjtj.Z.3LNneZnBFwbPXx.i2LNVkzlZY27im', 1);

--contraseña de pepito es: pepitope
insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('pepito@correo.com', 'pepito Perez','$2a$10$/rjcS8D08RtoJbcsG3wzaOfCztIaMl8z9guOrspe4xoHWaZUoRSwa', 2);

--Meterle a la tabla datos de vehiculo
SELECT * FROM vehiculo;
INSERT INTO vehiculo
(id_tipo_vehiculo, marca, modelo, ano, estado, placa, costo_dia, cantidad_puestos)
VALUES
    (1,'Toyota','Corolla',2022,'Disponible','ABC123',45.00,5),
    (2,'Honda','CRV',2023,'Disponible','DEF456',65.00,5),
    (3,'Ford','Ranger',2021,'Disponible','GHI789',70.00,5),
    (4,'Chevrolet','Spark',2020,'Disponible','JKL321',35.00,4),
    (5,'Hyundai','Staria',2024,'Disponible','MNO654',80.00,8),
    (2,'Kia','Sportage',2022,'Disponible','PQR987',60.00,5),
    (1,'Nissan','Sentra',2021,'Disponible','STU111',50.00,5);
--- eLIMINAR EL PRIMER VEHICULO
DELETE FROM vehiculo WHERE placa = 'ABC123';