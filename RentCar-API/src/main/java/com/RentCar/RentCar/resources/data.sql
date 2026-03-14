-- se inserta los roles en la tabla rol
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('ADMIN');
INSERT IGNORE  INTO rol (nombre_rol) VALUES ('AGENTE');

--correo:alejo@rentcar.com
--contraseña de alejo es: alejoren
insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('alejo@rentcar.com', 'alejo','$2a$12$N4kBImnPCoLcUDedzfjm4ODfjcxoOzceK2LFE/KFTlLqtGh/DgmqS', 1);

--correo:pepito@rentcar.com
--contraseña de pepito es: pepitope
insert IGNORE  into usuario(email, nombre, password_hash, id_rol)
values('pepito@correo.com', 'pepito Perez','$2a$10$/rjcS8D08RtoJbcsG3wzaOfCztIaMl8z9guOrspe4xoHWaZUoRSwa', 2);

-- Crear tabala tipo de vehiculo
CREATE TABLE tipo_vehiculo (
                               id_tipo_vehiculo INT PRIMARY KEY AUTO_INCREMENT,
                               tipo_vehiculo VARCHAR(50) NOT NULL
);
-- Insertar tipos de vehículo
INSERT INTO tipo_vehiculo (tipo_vehiculo) VALUES
                                              ('Sedán'),
                                              ('SUV'),
                                              ('Pickup'),
                                              ('Hatchback'),
                                              ('Camioneta');
-- Crear tabla de vehículos
CREATE TABLE vehiculo (
                          id_vehiculo INT PRIMARY KEY AUTO_INCREMENT,
                          id_tipo_vehiculo INT,
                          marca VARCHAR(50),
                          modelo VARCHAR(50),
                          ano INT,
                          estado VARCHAR(20),
                          placa VARCHAR(10),
                          costo_dia DECIMAL(10,2),
                          cantidad_puestos INT,
                          FOREIGN KEY (id_tipo_vehiculo) REFERENCES tipo_vehiculo(id_tipo_vehiculo)
);

-- Insertar vehículos
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
values('pepito@rentcar.com', 'pepito Perez','$2a$10$/rjcS8D08RtoJbcsG3wzaOfCztIaMl8z9guOrspe4xoHWaZUoRSwa', 2);

-- Ver datos de vehiculo junto con los datos del tipo de vehiculo.
SELECT v.*, t.tipo_vehiculo
FROM vehiculo v
         JOIN tipo_vehiculo t
              ON v.id_tipo_vehiculo = t.id_tipo_vehiculo;