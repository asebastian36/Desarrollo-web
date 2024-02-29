# Notas

## Concepto de BD

El concepto de una base de datos (BD) se refiere a una colección organizada de datos que están estructurados y almacenados de manera que se puedan acceder y gestionar de manera eficiente. Aquí hay algunos puntos clave sobre las bases de datos:

1. Datos Estructurados: Las bases de datos almacenan datos estructurados, lo que significa que los datos se organizan en tablas que contienen filas y columnas. Esta estructura facilita la consulta y manipulación de los datos.

2. Gestión Centralizada: Las bases de datos permiten centralizar la gestión de datos, lo que significa que los datos de una organización o aplicación se almacenan en un solo lugar y se pueden acceder y actualizar desde múltiples ubicaciones y aplicaciones.

3. Acceso Eficiente: Las bases de datos están diseñadas para proporcionar un acceso rápido y eficiente a los datos. Los sistemas de gestión de bases de datos (SGBD) utilizan técnicas de indexación y optimización para acelerar las consultas y reducir los tiempos de respuesta.

4. Integridad y Consistencia de los Datos: Los SGBD incluyen mecanismos para garantizar la integridad y la consistencia de los datos. Esto incluye la aplicación de restricciones de integridad, como claves primarias y foráneas, y la ejecución de transacciones para garantizar que las operaciones de actualización de datos se realicen de manera segura y consistente.

5. Seguridad: Los SGBD ofrecen funcionalidades de seguridad para proteger los datos sensibles. Esto puede incluir autenticación de usuarios, autorización de acceso basada en roles y permisos granulares para controlar quién puede acceder y manipular los datos.

6. Escalabilidad: Las bases de datos están diseñadas para ser escalables, lo que significa que pueden crecer para manejar grandes volúmenes de datos y altos niveles de tráfico sin perder rendimiento. Esto se logra mediante técnicas como la partición de datos y la replicación.

7. Backup y Recuperación: Los SGBD proporcionan herramientas para realizar copias de seguridad periódicas de los datos y para recuperarlos en caso de fallo del sistema o pérdida de datos.

En resumen, una base de datos es una herramienta fundamental en la gestión de datos en la informática moderna. Proporciona una forma estructurada y eficiente de almacenar, acceder y gestionar datos, lo que permite a las organizaciones y aplicaciones trabajar de manera más efectiva con la información.

## SQL

SQL (Structured Query Language) es un lenguaje de programación diseñado para gestionar y manipular bases de datos relacionales. Es un estándar de facto utilizado en la mayoría de los sistemas de gestión de bases de datos (SGBD) relacionales, como MySQL, PostgreSQL, SQL Server, Oracle, entre otros. Aquí tienes un resumen de los conceptos clave relacionados con SQL:

1. Lenguaje Declarativo: SQL es un lenguaje declarativo, lo que significa que se centra en "qué" operaciones se deben realizar en lugar de "cómo" se deben realizar. Los usuarios especifican las operaciones que desean realizar sobre los datos y el sistema de gestión de bases de datos (SGBD) determina la mejor manera de ejecutarlas.

2. Consultas: El SQL se utiliza principalmente para escribir consultas que permiten recuperar datos de una base de datos. Las consultas pueden ser simples o complejas, y pueden incluir operaciones como selección, proyección, unión, filtrado, ordenación y agrupación de datos.

3. Manipulación de Datos: Además de recuperar datos, SQL también permite manipular datos en la base de datos. Esto incluye operaciones como inserción (INSERT), actualización (UPDATE) y eliminación (DELETE) de filas en tablas.

4. Definición de Datos: SQL también se utiliza para definir y modificar la estructura de los datos en la base de datos. Esto incluye operaciones como la creación (CREATE), modificación (ALTER) y eliminación (DROP) de tablas, así como la definición de restricciones de integridad y otros objetos de la base de datos.

5. Control de Acceso: SQL proporciona comandos para controlar el acceso a los datos en la base de datos. Esto incluye la creación y gestión de usuarios y roles, así como la asignación de permisos para realizar operaciones en tablas y otros objetos de la base de datos.

6. Transacciones: SQL admite transacciones, que son unidades de trabajo que se ejecutan de manera consistente y aislada. Las transacciones permiten agrupar varias operaciones en una sola unidad atómica, garantizando que todas las operaciones se completen correctamente o que ninguna se complete en absoluto.

7. Subconjunto Estándar: SQL está definido por varios estándares, siendo el más conocido el estándar SQL-92. Sin embargo, la mayoría de los SGBD implementan extensiones propietarias y variaciones del estándar.

En resumen, SQL es un lenguaje poderoso y versátil que se utiliza para interactuar con bases de datos relacionales. Con SQL, los usuarios pueden realizar consultas, manipular datos, definir la estructura de la base de datos, controlar el acceso a los datos y gestionar transacciones de manera eficaz.

## SGBD

Un Sistema de Gestión de Bases de Datos (SGBD) es un software que permite a los usuarios definir, crear, mantener y manipular bases de datos. Proporciona una interfaz entre los usuarios y la base de datos subyacente, facilitando la gestión eficiente de los datos. Aquí tienes un resumen de los conceptos clave relacionados con los SGBD:

1. Almacenamiento de Datos: Los SGBD gestionan el almacenamiento de datos de manera eficiente en dispositivos de almacenamiento, como discos duros o unidades de estado sólido. Organizan los datos en estructuras lógicas y físicas optimizadas para acceso rápido y recuperación.

2. Interacción con los Datos: Los SGBD proporcionan una interfaz para que los usuarios interactúen con los datos almacenados en la base de datos. Esto incluye la capacidad de consultar, insertar, actualizar y eliminar datos utilizando un lenguaje de consulta, como SQL (Structured Query Language).

3. Seguridad y Control de Acceso: Los SGBD implementan mecanismos de seguridad para proteger los datos sensibles. Esto incluye autenticación de usuarios, autorización de acceso basada en roles y permisos, y cifrado de datos para proteger la confidencialidad y la integridad de los datos.

4. Integridad de los Datos: Los SGBD garantizan la integridad de los datos mediante la aplicación de restricciones de integridad, como claves primarias y foráneas, para garantizar la coherencia y la precisión de los datos almacenados en la base de datos.

5. Transacciones: Los SGBD admiten transacciones, que son unidades de trabajo que se ejecutan de manera consistente y aislada. Esto permite agrupar varias operaciones en una sola unidad atómica, garantizando que todas las operaciones se completen correctamente o que ninguna se complete en absoluto.

6. Administración de la Base de Datos: Los SGBD proporcionan herramientas para administrar y mantener la base de datos, incluyendo la creación y modificación de esquemas de base de datos, la optimización del rendimiento, la realización de copias de seguridad y la recuperación de datos en caso de fallo del sistema.

7. Escalabilidad y Disponibilidad: Los SGBD están diseñados para ser escalables y altamente disponibles, lo que significa que pueden crecer para manejar grandes volúmenes de datos y altos niveles de tráfico sin perder rendimiento, y pueden tolerar fallos del sistema sin interrumpir el acceso a los datos.

En resumen, un Sistema de Gestión de Bases de Datos (SGBD) es una herramienta fundamental en la gestión de datos en la informática moderna. Proporciona una interfaz eficiente y segura para interactuar con los datos almacenados en una base de datos, garantizando su integridad, seguridad y disponibilidad.

## MySQL

MySQL es un sistema de gestión de bases de datos relacional (RDBMS) de código abierto ampliamente utilizado. Aquí tienes un resumen de los conceptos clave relacionados con MySQL:

1. Base de Datos Relacional: MySQL es un sistema de gestión de bases de datos relacionales, lo que significa que organiza los datos en tablas con filas y columnas. Está diseñado para almacenar y manipular grandes volúmenes de datos de manera eficiente.

2. Código Abierto: MySQL es un software de código abierto, lo que significa que su código fuente está disponible públicamente y puede ser modificado y distribuido libremente. Esto lo hace popular entre desarrolladores y organizaciones que buscan una solución de base de datos económica y flexible.

3. Multiplataforma: MySQL es compatible con varias plataformas, incluyendo sistemas operativos como Linux, Windows y macOS. Esto permite que sea utilizado en una amplia gama de entornos y configuraciones.

4. Características Principales: MySQL ofrece una variedad de características importantes, incluyendo soporte para transacciones ACID (Atomicidad, Consistencia, Aislamiento, Durabilidad), replicación para alta disponibilidad y escalabilidad, funciones de seguridad robustas, y un potente lenguaje de consulta SQL para la manipulación y gestión de datos.

5. Compatibilidad con Estándares: MySQL es compatible con los estándares SQL (Structured Query Language) y ANSI SQL, lo que significa que utiliza un lenguaje de consulta estándar para interactuar con la base de datos. Sin embargo, también incluye extensiones y características propietarias específicas de MySQL.

6. Desarrollo y Mantenimiento: MySQL es desarrollado y mantenido por Oracle Corporation, una empresa líder en tecnología de bases de datos. Oracle ofrece versiones comerciales y de código abierto de MySQL, así como servicios de soporte y consultoría para empresas que utilizan MySQL en entornos críticos.

7. Comunidad Activa: MySQL cuenta con una gran comunidad de usuarios y desarrolladores activos que contribuyen al desarrollo, soporte y mejora continua del software. Esta comunidad proporciona recursos, documentación, herramientas y soluciones para resolver problemas y optimizar el rendimiento de MySQL.

En resumen, MySQL es un sistema de gestión de bases de datos relacional de código abierto ampliamente utilizado que ofrece una combinación de características potentes, rendimiento confiable y flexibilidad para una amplia gama de aplicaciones y entornos de desarrollo.

## Normalizacion

La normalización en el contexto de las bases de datos se refiere al proceso de diseñar la estructura de una base de datos relacional de manera que cumpla con ciertas reglas y principios para reducir la redundancia de datos y mejorar la integridad y eficiencia de la base de datos. El objetivo principal de la normalización es eliminar las anomalías de actualización, inserción y eliminación, y garantizar que los datos estén almacenados de forma coherente y sin redundancias innecesarias.

El proceso de normalización se basa en una serie de formas normales, que son reglas que describen diferentes niveles de organización de los datos. Las formas normales más comunes son la Primera Forma Normal (1NF), la Segunda Forma Normal (2NF), la Tercera Forma Normal (3NF) y la Forma Normal de Boyce-Codd (BCNF), aunque existen formas normales más avanzadas como la Cuarta Forma Normal (4NF) y la Quinta Forma Normal (5NF).

Aquí hay algunos conceptos clave relacionados con la normalización:

### 1. Primera Forma Normal (1NF):

En la 1NF, los datos están organizados en tablas con filas y columnas, y cada celda contiene un solo valor atómico. No debe haber repetición de grupos de columnas, y cada fila debe ser única y estar identificada por una clave primaria.

### 2. Segunda Forma Normal (2NF):

En la 2NF, se eliminan las dependencias parciales al dividir las tablas en varias tablas más pequeñas y relacionadas entre sí. Cada atributo no clave debe depender completamente de la clave primaria, y no debe haber dependencias transitivas.

### 3. Tercera Forma Normal (3NF):

En la 3NF, se eliminan las dependencias transitivas al dividir las tablas en formas normales más pequeñas y relacionadas entre sí. Cada atributo no clave debe depender directamente de la clave primaria, y no debe haber dependencias transitivas entre los atributos no clave.

### 4. Forma Normal de Boyce-Codd (BCNF):

La BCNF es una forma más estricta de la 3NF en la que se eliminan todas las dependencias funcionales no triviales. Cada determinante de una dependencia funcional debe ser una superclave de la tabla.

### 5. Cuarta y Quinta Forma Normal (4NF y 5NF):

Estas formas normales abordan problemas específicos de dependencias multivaluadas y dependencias de unión, respectivamente, para eliminar redundancias adicionales y mejorar la estructura de la base de datos.

La normalización es un proceso iterativo que implica analizar y ajustar el diseño de la base de datos para cumplir con las formas normales adecuadas. Un diseño normalizado ayuda a garantizar la consistencia y la integridad de los datos, y facilita la gestión y el mantenimiento de la base de datos a medida que crece y evoluciona con el tiempo.

## Consultas realizadas

```
PowerShell 7.4.1
Loading personal and system profiles took 5797ms.
 angel  mysql -v
ERROR 1045 (28000): Access denied for user 'ODBC'@'localhost' (using password: NO)
 angel  mysql --version
C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe  Ver 8.0.34 for Win64 on x86_64 (MySQL Community Server - GPL)
 angel  mysql -u root -pL4c1b0rgv4c4#
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.0.34 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| anime              |
| bd_productos       |
| bd_tienda          |
| biblioteca         |
| control_escolar    |
| db_springboot      |
| information_schema |
| mysql              |
| pd-act-1           |
| performance_schema |
| sakila             |
| sys                |
| world              |
+--------------------+
13 rows in set (0.03 sec)

mysql> CREATE DATABASE appsalon;
Query OK, 1 row affected (0.02 sec)

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| anime              |
| appsalon           |
| bd_productos       |
| bd_tienda          |
| biblioteca         |
| control_escolar    |
| db_springboot      |
| information_schema |
| mysql              |
| pd-act-1           |
| performance_schema |
| sakila             |
| sys                |
| world              |
+--------------------+
14 rows in set (0.00 sec)

mysql> clear
mysql> USE appsalon;
Database changed
mysql> SHOW TABLES;
Empty set (0.02 sec)

mysql> CREATE TABLE Servicios (
    -> id INT(11) NOT NULL AUTO_INCREMENT,
    -> nombre VARCHAR(60) NOT NULL,
    -> precio DECIMAL(11,2) NOT NULL,
    -> PRIMARY KEY (id)
    -> );
Query OK, 0 rows affected, 1 warning (0.04 sec)

mysql> SHOW TABLES;
+--------------------+
| Tables_in_appsalon |
+--------------------+
| servicios          |
+--------------------+
1 row in set (0.00 sec)

mysql> DESCRIBE Servicios;
+--------+---------------+------+-----+---------+----------------+
| Field  | Type          | Null | Key | Default | Extra          |
+--------+---------------+------+-----+---------+----------------+
| id     | int           | NO   | PRI | NULL    | auto_increment |
| nombre | varchar(60)   | NO   |     | NULL    |                |
| precio | decimal(11,2) | NO   |     | NULL    |                |
+--------+---------------+------+-----+---------+----------------+
3 rows in set (0.02 sec)

mysql> INSERT INTO Servicios (nombre, precio) VALUES ('Corte de Cabello de Adulto', 150);
Query OK, 1 row affected (0.02 sec)

mysql> INSERT INTO Servicios (nombre, precio) VALUES ('Corte de Cabello Infantil', 90);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO Servicios (nombre, precio) VALUES ('Corte de Cabello de Adulto con Barba', 300);
Query OK, 1 row affected (0.01 sec)

mysql> INSERT INTO Servicios (nombre, precio) VALUES ('Corte de Cabello de Adulto con Barba', 300)
    -> ('Corte de Cabello Infantil', 90)
    -> ('Corte de Cabello de Adulto', 150);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '('Corte de Cabello Infantil', 90)
('Corte de Cabello de Adulto', 150)' at line 2
mysql> INSERT INTO Servicios (nombre, precio) VALUES ('Corte de Cabello de Adulto con Barba', 300),
    -> ('Corte de Cabello Infantil', 90),
    -> ('Corte de Cabello de Adulto', 150);
Query OK, 3 rows affected (0.01 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM Servicios;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantil            |  90.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  5 | Corte de Cabello Infantil            |  90.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
+----+--------------------------------------+--------+
6 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios WHERE id = 1;
+----+----------------------------+--------+
| id | nombre                     | precio |
+----+----------------------------+--------+
|  1 | Corte de Cabello de Adulto | 150.00 |
+----+----------------------------+--------+
1 row in set (0.02 sec)

mysql> SELECT * FROM Servicios WHERE nombre = 'Corte de Cabello Infantil';
+----+---------------------------+--------+
| id | nombre                    | precio |
+----+---------------------------+--------+
|  2 | Corte de Cabello Infantil |  90.00 |
|  5 | Corte de Cabello Infantil |  90.00 |
+----+---------------------------+--------+
2 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios ORDER BY precio;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  2 | Corte de Cabello Infantil            |  90.00 |
|  5 | Corte de Cabello Infantil            |  90.00 |
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
+----+--------------------------------------+--------+
6 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios ORDER BY precio ASC;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  2 | Corte de Cabello Infantil            |  90.00 |
|  5 | Corte de Cabello Infantil            |  90.00 |
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
+----+--------------------------------------+--------+
6 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios ORDER BY precio DESC;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantil            |  90.00 |
|  5 | Corte de Cabello Infantil            |  90.00 |
+----+--------------------------------------+--------+
6 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios LIMIT 3;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantil            |  90.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
+----+--------------------------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios ORDER BY precio DESC LIMIT 3;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  1 | Corte de Cabello de Adulto           | 150.00 |
+----+--------------------------------------+--------+
3 rows in set (0.00 sec)

mysql> INSERT INTO Servicios (nombre, precio) VALUES ('Corte de Cabello de Mujer', 300);
Query OK, 1 row affected (0.01 sec)

mysql> SELECT * FROM Servicios ORDER BY precio DESC LIMIT 3;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  7 | Corte de Cabello de Mujer            | 300.00 |
+----+--------------------------------------+--------+
3 rows in set (0.00 sec)

mysql>
mysql> SELECT * FROM Servicios ORDER BY precio ORDER BY id DESC LIMIT 3;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'ORDER BY id DESC LIMIT 3' at line 1
mysql> SELECT * FROM Servicios ORDER BY precio, id DESC LIMIT 3;
+----+----------------------------+--------+
| id | nombre                     | precio |
+----+----------------------------+--------+
|  5 | Corte de Cabello Infantil  |  90.00 |
|  2 | Corte de Cabello Infantil  |  90.00 |
|  6 | Corte de Cabello de Adulto | 150.00 |
+----+----------------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios ORDER BY precio, id ASC LIMIT 3;
+----+----------------------------+--------+
| id | nombre                     | precio |
+----+----------------------------+--------+
|  2 | Corte de Cabello Infantil  |  90.00 |
|  5 | Corte de Cabello Infantil  |  90.00 |
|  1 | Corte de Cabello de Adulto | 150.00 |
+----+----------------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios ORDER BY precio DESC LIMIT 3;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  7 | Corte de Cabello de Mujer            | 300.00 |
+----+--------------------------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios ORDER BY id, precio DESC LIMIT 3;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantil            |  90.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
+----+--------------------------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantil            |  90.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  5 | Corte de Cabello Infantil            |  90.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
|  7 | Corte de Cabello de Mujer            | 300.00 |
+----+--------------------------------------+--------+
7 rows in set (0.00 sec)

mysql> UPDATE Servicios SET precio = 110 WHERE nombre = 'Corte de Cabello Infantil';
Query OK, 2 rows affected (0.01 sec)
Rows matched: 2  Changed: 2  Warnings: 0

mysql> SELECT * FROM Servicios;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantil            | 110.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  5 | Corte de Cabello Infantil            | 110.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
|  7 | Corte de Cabello de Mujer            | 300.00 |
+----+--------------------------------------+--------+
7 rows in set (0.00 sec)

mysql> UPDATE Servicios SET precio = 250 WHERE nombre = 'Corte de Cabello de Mujer';
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> SELECT * FROM Servicios;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantil            | 110.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  5 | Corte de Cabello Infantil            | 110.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
|  7 | Corte de Cabello de Mujer            | 250.00 |
+----+--------------------------------------+--------+
7 rows in set (0.00 sec)

mysql> UPDATE Servicios SET precio = 120, nombre = 'Corte de Cabello Infantes' WHERE nombre = 'Corte de Cabello Infantil';
Query OK, 2 rows affected (0.01 sec)
Rows matched: 2  Changed: 2  Warnings: 0

mysql> SELECT * FROM Servicios;
+----+--------------------------------------+--------+
| id | nombre                               | precio |
+----+--------------------------------------+--------+
|  1 | Corte de Cabello de Adulto           | 150.00 |
|  2 | Corte de Cabello Infantes            | 120.00 |
|  3 | Corte de Cabello de Adulto con Barba | 300.00 |
|  4 | Corte de Cabello de Adulto con Barba | 300.00 |
|  5 | Corte de Cabello Infantes            | 120.00 |
|  6 | Corte de Cabello de Adulto           | 150.00 |
|  7 | Corte de Cabello de Mujer            | 250.00 |
+----+--------------------------------------+--------+
7 rows in set (0.00 sec)

mysql> UPDATE Servicios SET precio = 320, nombre = 'Paquete Completo Adulto' WHERE nombre = 'Corte de Cabello Adulto';
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0

mysql> UPDATE Servicios SET precio = 320, nombre = 'Paquete Completo Adulto' WHERE nombre = 'Corte de Cabello Adulto con Barba';
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0

mysql> UPDATE Servicios SET precio = 320, nombre = 'Paquete Completo Adulto' WHERE nombre = 'Corte de Cabello de Adulto con Barba';
Query OK, 2 rows affected (0.01 sec)
Rows matched: 2  Changed: 2  Warnings: 0

mysql> SELECT * FROM Servicios;
+----+----------------------------+--------+
| id | nombre                     | precio |
+----+----------------------------+--------+
|  1 | Corte de Cabello de Adulto | 150.00 |
|  2 | Corte de Cabello Infantes  | 120.00 |
|  3 | Paquete Completo Adulto    | 320.00 |
|  4 | Paquete Completo Adulto    | 320.00 |
|  5 | Corte de Cabello Infantes  | 120.00 |
|  6 | Corte de Cabello de Adulto | 150.00 |
|  7 | Corte de Cabello de Mujer  | 250.00 |
+----+----------------------------+--------+
7 rows in set (0.00 sec)

mysql> DELETE FROM Servicios WHERE nombre = 'Corte de Cabello de Adulto';
Query OK, 2 rows affected (0.01 sec)

mysql> SELECT * FROM Servicios;
+----+---------------------------+--------+
| id | nombre                    | precio |
+----+---------------------------+--------+
|  2 | Corte de Cabello Infantes | 120.00 |
|  3 | Paquete Completo Adulto   | 320.00 |
|  4 | Paquete Completo Adulto   | 320.00 |
|  5 | Corte de Cabello Infantes | 120.00 |
|  7 | Corte de Cabello de Mujer | 250.00 |
+----+---------------------------+--------+
5 rows in set (0.00 sec)

mysql> DELETE FROM Servicios WHERE nombre = 'Paquete Completo Adulto';
Query OK, 2 rows affected (0.01 sec)

mysql> SELECT * FROM Servicios;
+----+---------------------------+--------+
| id | nombre                    | precio |
+----+---------------------------+--------+
|  2 | Corte de Cabello Infantes | 120.00 |
|  5 | Corte de Cabello Infantes | 120.00 |
|  7 | Corte de Cabello de Mujer | 250.00 |
+----+---------------------------+--------+
3 rows in set (0.00 sec)

mysql> DESCRIBE Servicios;
+--------+---------------+------+-----+---------+----------------+
| Field  | Type          | Null | Key | Default | Extra          |
+--------+---------------+------+-----+---------+----------------+
| id     | int           | NO   | PRI | NULL    | auto_increment |
| nombre | varchar(60)   | NO   |     | NULL    |                |
| precio | decimal(11,2) | NO   |     | NULL    |                |
+--------+---------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

mysql> ALTER TABLE Servicios ADD descripcion VARCHAR(100) NOT NULL;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> DESCRIBE Servicios;
+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| id          | int           | NO   | PRI | NULL    | auto_increment |
| nombre      | varchar(60)   | NO   |     | NULL    |                |
| precio      | decimal(11,2) | NO   |     | NULL    |                |
| descripcion | varchar(100)  | NO   |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> ALTER TABLE Servicios CHANGE descripcion nuevonombre VARCHAR(200) NOT NULL;
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> DESCRIBE Servicios;
+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| id          | int           | NO   | PRI | NULL    | auto_increment |
| nombre      | varchar(60)   | NO   |     | NULL    |                |
| precio      | decimal(11,2) | NO   |     | NULL    |                |
| nuevonombre | varchar(200)  | NO   |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> ALTER TABLE Servicios CHANGE nuevonombre descripcion VARCHAR(200) NOT NULL;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> DESCRIBE Servicios;
+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| id          | int           | NO   | PRI | NULL    | auto_increment |
| nombre      | varchar(60)   | NO   |     | NULL    |                |
| precio      | decimal(11,2) | NO   |     | NULL    |                |
| descripcion | varchar(200)  | NO   |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> INSERT INTO Servicios (descripcion) VALUES ('pendiente') WHERE descripcion = NULL;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'WHERE descripcion = NULL' at line 1
mysql> SELECT * FROM Servicios;
+----+---------------------------+--------+-------------+
| id | nombre                    | precio | descripcion |
+----+---------------------------+--------+-------------+
|  2 | Corte de Cabello Infantes | 120.00 |             |
|  5 | Corte de Cabello Infantes | 120.00 |             |
|  7 | Corte de Cabello de Mujer | 250.00 |             |
+----+---------------------------+--------+-------------+
3 rows in set (0.00 sec)

mysql> UPDATE Servicios descripcion = 'Pendiente';
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '= 'Pendiente'' at line 1
mysql> UPDATE Servicios SET descripcion = 'Pendiente';
Query OK, 3 rows affected (0.01 sec)
Rows matched: 3  Changed: 3  Warnings: 0

mysql> DESCRIBE Servicios;
+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| id          | int           | NO   | PRI | NULL    | auto_increment |
| nombre      | varchar(60)   | NO   |     | NULL    |                |
| precio      | decimal(11,2) | NO   |     | NULL    |                |
| descripcion | varchar(200)  | NO   |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> SELECT * FROM Servicios;
+----+---------------------------+--------+-------------+
| id | nombre                    | precio | descripcion |
+----+---------------------------+--------+-------------+
|  2 | Corte de Cabello Infantes | 120.00 | Pendiente   |
|  5 | Corte de Cabello Infantes | 120.00 | Pendiente   |
|  7 | Corte de Cabello de Mujer | 250.00 | Pendiente   |
+----+---------------------------+--------+-------------+
3 rows in set (0.00 sec)

mysql> ALTER TABLE Servicos DROP COLUMN descripcion
    -> ;
ERROR 1146 (42S02): Table 'appsalon.servicos' doesn't exist
mysql> ALTER TABLE Servicios DROP COLUMN descripcion;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> DESCRIBE Servicios;
+--------+---------------+------+-----+---------+----------------+
| Field  | Type          | Null | Key | Default | Extra          |
+--------+---------------+------+-----+---------+----------------+
| id     | int           | NO   | PRI | NULL    | auto_increment |
| nombre | varchar(60)   | NO   |     | NULL    |                |
| precio | decimal(11,2) | NO   |     | NULL    |                |
+--------+---------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

mysql> SHOW TABLES;
+--------------------+
| Tables_in_appsalon |
+--------------------+
| servicios          |
+--------------------+
1 row in set (0.00 sec)

mysql> DROP TABLE Servicios
    -> ;
Query OK, 0 rows affected (0.03 sec)

mysql> CREATE TABLE SERVICIOS (
    -> id INT(11) NOT NULL AUTO_INCREMENT,
    -> nombre VARCHAR(60) NOT NULL,
    -> precion DECIMAL(11,2) NOT NULL,
    -> PRIMARY KEY (id)
    -> );
Query OK, 0 rows affected, 1 warning (0.04 sec)

mysql> CREATE TABLE RESERVACIONES (
    -> id INT(11) NOT NULL AUTO_INCREMENT,
    -> nombre VARCHAR(60) NOT NULL,
    -> apellido VARCHAR(60) NOT NULL,
    -> hora TIME DEFAULT NULL,
    -> fecha DATE DEFAULT NULL,
    -> servicios VARCHAR(255) NOT NULL,
    -> PRIMARY KEY (id)
    -> );
Query OK, 0 rows affected, 1 warning (0.04 sec)

mysql> DESCRIBE SERVICIOS;
+---------+---------------+------+-----+---------+----------------+
| Field   | Type          | Null | Key | Default | Extra          |
+---------+---------------+------+-----+---------+----------------+
| id      | int           | NO   | PRI | NULL    | auto_increment |
| nombre  | varchar(60)   | NO   |     | NULL    |                |
| precion | decimal(11,2) | NO   |     | NULL    |                |
+---------+---------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)

mysql> DESCRIBE RESERVACIONES;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| nombre    | varchar(60)  | NO   |     | NULL    |                |
| apellido  | varchar(60)  | NO   |     | NULL    |                |
| hora      | time         | YES  |     | NULL    |                |
| fecha     | date         | YES  |     | NULL    |                |
| servicios | varchar(255) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql> INSERT INTO reservaciones (nombre, apellido, hora, fecha, servicios) VALUES
    ->         ('Juan', 'De la torre', '10:30:00', '2021-06-28', 'Corte de Cabello Adulto, Corte de Barba' ),
    ->         ('Antonio', 'Hernandez', '14:00:00', '2021-07-30', 'Corte de Cabello Niño'),
    ->         ('Pedro', 'Juarez', '20:00:00', '2021-06-25', 'Corte de Cabello Adulto'),
    ->         ('Mireya', 'Perez', '19:00:00', '2021-06-25', 'Peinado Mujer'),
    ->         ('Jose', 'Castillo', '14:00:00', '2021-07-30', 'Peinado Hombre'),
    ->         ('Maria', 'Diaz', '14:30:00', '2021-06-25', 'Tinte'),
    ->         ('Clara', 'Duran', '10:00:00', '2021-07-01', 'Uñas, Tinte, Corte de Cabello Mujer'),
    ->         ('Miriam', 'Ibañez', '09:00:00', '2021-07-01', 'Tinte'),
    ->         ('Samuel', 'Reyes', '10:00:00', '2021-07-02', 'Tratamiento Capilar'),
    ->         ('Joaquin', 'Muñoz', '19:00:00', '2021-06-28', 'Tratamiento Capilar'),
    ->         ('Julia', 'Lopez', '08:00:00', '2021-06-25', 'Tinte'),
    ->         ('Carmen', 'Ruiz', '20:00:00', '2021-07-01', 'Uñas'),
    ->         ('Isaac', 'Sala', '09:00:00', '2021-07-30', 'Corte de Cabello Adulto'),
    ->         ('Ana', 'Preciado', '14:30:00', '2021-06-28', 'Corte de Cabello Mujer'),
    ->         ('Sergio', 'Iglesias', '10:00:00', '2021-07-02', 'Corte de Cabello Adulto'),
    ->         ('Aina', 'Acosta', '14:00:00', '2021-07-30', 'Uñas'),
    ->         ('Carlos', 'Ortiz', '20:00:00', '2021-06-25', 'Corte de Cabello Niño'),
    ->         ('Roberto', 'Serrano', '10:00:00', '2021-07-30', 'Corte de Cabello Niño'),
    ->         ('Carlota', 'Perez', '14:00:00', '2021-07-01', 'Uñas'),
    ->         ('Ana Maria', 'Igleias', '14:00:00', '2021-07-02', 'Uñas, Tinte'),
    ->         ('Jaime', 'Jimenez', '14:00:00', '2021-07-01', 'Corte de Cabello Niño'),
    ->         ('Roberto', 'Torres', '10:00:00', '2021-07-02', 'Corte de Cabello Adulto'),
    ->         ('Juan', 'Cano', '09:00:00', '2021-07-02', 'Corte de Cabello Niño'),
    ->         ('Santiago', 'Hernandez', '19:00:00', '2021-06-28', 'Corte de Cabello Niño'),
    ->         ('Berta', 'Gomez', '09:00:00', '2021-07-01', 'Uñas'),
    ->         ('Miriam', 'Dominguez', '19:00:00', '2021-06-28', 'Corte de Cabello Niño'),
    ->         ('Antonio', 'Castro', '14:30:00', '2021-07-02', 'Corte de Cabello Adulti'),
    ->         ('Hugo', 'Alonso', '09:00:00', '2021-06-28', 'Corte de Barba'),
    ->         ('Victoria', 'Perez', '10:00:00', '2021-07-02', 'Uñas, Tinte'),
    ->         ('Jimena', 'Leon', '10:30:00', '2021-07-30', 'Uñas, Corte de Cabello Mujer'),
    ->
    ->
    -> ^C
mysql> INSERT INTO RESERVACIONES (nombre, apellido, hora, fecha, servicios) VALUES
    -> ('Juan', 'De la torre', '10:30:00', '2021-06-28', 'Corte de Cabello Adulto, Corte de Barba' ),
    ->         ('Antonio', 'Hernandez', '14:00:00', '2021-07-30', 'Corte de Cabello Niño'),
    ->         ('Pedro', 'Juarez', '20:00:00', '2021-06-25', 'Corte de Cabello Adulto'),
    ->         ('Mireya', 'Perez', '19:00:00', '2021-06-25', 'Peinado Mujer'),
    ->         ('Jose', 'Castillo', '14:00:00', '2021-07-30', 'Peinado Hombre'),
    ->         ('Maria', 'Diaz', '14:30:00', '2021-06-25', 'Tinte'),
    ->         ('Clara', 'Duran', '10:00:00', '2021-07-01', 'Uñas, Tinte, Corte de Cabello Mujer'),
    ->         ('Miriam', 'Ibañez', '09:00:00', '2021-07-01', 'Tinte'),
    ->         ('Samuel', 'Reyes', '10:00:00', '2021-07-02', 'Tratamiento Capilar'),
    ->         ('Joaquin', 'Muñoz', '19:00:00', '2021-06-28', 'Tratamiento Capilar'),
    ->         ('Julia', 'Lopez', '08:00:00', '2021-06-25', 'Tinte'),
    ->         ('Carmen', 'Ruiz', '20:00:00', '2021-07-01', 'Uñas'),
    ->         ('Isaac', 'Sala', '09:00:00', '2021-07-30', 'Corte de Cabello Adulto'),
    ->         ('Ana', 'Preciado', '14:30:00', '2021-06-28', 'Corte de Cabello Mujer'),
    ->         ('Sergio', 'Iglesias', '10:00:00', '2021-07-02', 'Corte de Cabello Adulto'),
    ->         ('Aina', 'Acosta', '14:00:00', '2021-07-30', 'Uñas'),
    ->         ('Carlos', 'Ortiz', '20:00:00', '2021-06-25', 'Corte de Cabello Niño'),
    ->         ('Roberto', 'Serrano', '10:00:00', '2021-07-30', 'Corte de Cabello Niño'),
    ->         ('Carlota', 'Perez', '14:00:00', '2021-07-01', 'Uñas'),
    ->         ('Ana Maria', 'Igleias', '14:00:00', '2021-07-02', 'Uñas, Tinte'),
    ->         ('Jaime', 'Jimenez', '14:00:00', '2021-07-01', 'Corte de Cabello Niño'),
    ->         ('Roberto', 'Torres', '10:00:00', '2021-07-02', 'Corte de Cabello Adulto'),
    ->         ('Juan', 'Cano', '09:00:00', '2021-07-02', 'Corte de Cabello Niño'),
    ->         ('Santiago', 'Hernandez', '19:00:00', '2021-06-28', 'Corte de Cabello Niño'),
    ->         ('Berta', 'Gomez', '09:00:00', '2021-07-01', 'Uñas'),
    ->         ('Miriam', 'Dominguez', '19:00:00', '2021-06-28', 'Corte de Cabello Niño'),
    ->         ('Antonio', 'Castro', '14:30:00', '2021-07-02', 'Corte de Cabello Adulti'),
    ->         ('Hugo', 'Alonso', '09:00:00', '2021-06-28', 'Corte de Barba'),
    ->         ('Victoria', 'Perez', '10:00:00', '2021-07-02', 'Uñas, Tinte'),
    ->         ('Jimena', 'Leon', '10:30:00', '2021-07-30', 'Uñas, Corte de Cabello Mujer'),
    ->         ('Raquel' ,'Peña', '20:30:00', '2021-06-25', 'Corte de Cabello Mujer');
Query OK, 31 rows affected (0.02 sec)
Records: 31  Duplicates: 0  Warnings: 0

mysql> INSERT INTO SERVICIOS ( nombre, precio ) VALUES
    -> ('Corte de Cabello Niño', 60),
    ->         ('Corte de Cabello Hombre', 80),
    ->         ('Corte de Barba', 60),
    ->         ('Peinado Mujer', 80),
    ->         ('Peinado Hombre', 60),
    ->         ('Tinte',300),
    ->         ('Uñas', 400),
    ->         ('Lavado de Cabello', 50),
    ->         ('Tratamiento Capilar', 150);
ERROR 1054 (42S22): Unknown column 'precio' in 'field list'
mysql> ALTER TABLE SERVICIOS CHANGE precion precio;
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near '' at line 1
mysql> ALTER TABLE SERVICIOS CHANGE precion precio DECIMAL(11,2) NOT NULL;
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> INSERT INTO SERVICIOS ( nombre, precio ) VALUES
    -> ('Corte de Cabello Niño', 60),
    ->         ('Corte de Cabello Hombre', 80),
    ->         ('Corte de Barba', 60),
    ->         ('Peinado Mujer', 80),
    ->         ('Peinado Hombre', 60),
    ->         ('Tinte',300),
    ->         ('Uñas', 400),
    ->         ('Lavado de Cabello', 50),
    ->         ('Tratamiento Capilar', 150);
Query OK, 9 rows affected (0.01 sec)
Records: 9  Duplicates: 0  Warnings: 0

mysql> SELECT * FROM SERVICIOS;
+----+-------------------------+--------+
| id | nombre                  | precio |
+----+-------------------------+--------+
|  1 | Corte de Cabello Niño   |  60.00 |
|  2 | Corte de Cabello Hombre |  80.00 |
|  3 | Corte de Barba          |  60.00 |
|  4 | Peinado Mujer           |  80.00 |
|  5 | Peinado Hombre          |  60.00 |
|  6 | Tinte                   | 300.00 |
|  7 | Uñas                    | 400.00 |
|  8 | Lavado de Cabello       |  50.00 |
|  9 | Tratamiento Capilar     | 150.00 |
+----+-------------------------+--------+
9 rows in set (0.00 sec)

mysql> SELECT * FROM RESERVACIONES;
+----+-----------+-------------+----------+------------+-----------------------------------------+
| id | nombre    | apellido    | hora     | fecha      | servicios                               |
+----+-----------+-------------+----------+------------+-----------------------------------------+
|  1 | Juan      | De la torre | 10:30:00 | 2021-06-28 | Corte de Cabello Adulto, Corte de Barba |
|  2 | Antonio   | Hernandez   | 14:00:00 | 2021-07-30 | Corte de Cabello Niño                   |
|  3 | Pedro     | Juarez      | 20:00:00 | 2021-06-25 | Corte de Cabello Adulto                 |
|  4 | Mireya    | Perez       | 19:00:00 | 2021-06-25 | Peinado Mujer                           |
|  5 | Jose      | Castillo    | 14:00:00 | 2021-07-30 | Peinado Hombre                          |
|  6 | Maria     | Diaz        | 14:30:00 | 2021-06-25 | Tinte                                   |
|  7 | Clara     | Duran       | 10:00:00 | 2021-07-01 | Uñas, Tinte, Corte de Cabello Mujer     |
|  8 | Miriam    | Ibañez      | 09:00:00 | 2021-07-01 | Tinte                                   |
|  9 | Samuel    | Reyes       | 10:00:00 | 2021-07-02 | Tratamiento Capilar                     |
| 10 | Joaquin   | Muñoz       | 19:00:00 | 2021-06-28 | Tratamiento Capilar                     |
| 11 | Julia     | Lopez       | 08:00:00 | 2021-06-25 | Tinte                                   |
| 12 | Carmen    | Ruiz        | 20:00:00 | 2021-07-01 | Uñas                                    |
| 13 | Isaac     | Sala        | 09:00:00 | 2021-07-30 | Corte de Cabello Adulto                 |
| 14 | Ana       | Preciado    | 14:30:00 | 2021-06-28 | Corte de Cabello Mujer                  |
| 15 | Sergio    | Iglesias    | 10:00:00 | 2021-07-02 | Corte de Cabello Adulto                 |
| 16 | Aina      | Acosta      | 14:00:00 | 2021-07-30 | Uñas                                    |
| 17 | Carlos    | Ortiz       | 20:00:00 | 2021-06-25 | Corte de Cabello Niño                   |
| 18 | Roberto   | Serrano     | 10:00:00 | 2021-07-30 | Corte de Cabello Niño                   |
| 19 | Carlota   | Perez       | 14:00:00 | 2021-07-01 | Uñas                                    |
| 20 | Ana Maria | Igleias     | 14:00:00 | 2021-07-02 | Uñas, Tinte                             |
| 21 | Jaime     | Jimenez     | 14:00:00 | 2021-07-01 | Corte de Cabello Niño                   |
| 22 | Roberto   | Torres      | 10:00:00 | 2021-07-02 | Corte de Cabello Adulto                 |
| 23 | Juan      | Cano        | 09:00:00 | 2021-07-02 | Corte de Cabello Niño                   |
| 24 | Santiago  | Hernandez   | 19:00:00 | 2021-06-28 | Corte de Cabello Niño                   |
| 25 | Berta     | Gomez       | 09:00:00 | 2021-07-01 | Uñas                                    |
| 26 | Miriam    | Dominguez   | 19:00:00 | 2021-06-28 | Corte de Cabello Niño                   |
| 27 | Antonio   | Castro      | 14:30:00 | 2021-07-02 | Corte de Cabello Adulti                 |
| 28 | Hugo      | Alonso      | 09:00:00 | 2021-06-28 | Corte de Barba                          |
| 29 | Victoria  | Perez       | 10:00:00 | 2021-07-02 | Uñas, Tinte                             |
| 30 | Jimena    | Leon        | 10:30:00 | 2021-07-30 | Uñas, Corte de Cabello Mujer            |
| 31 | Raquel    | Peña        | 20:30:00 | 2021-06-25 | Corte de Cabello Mujer                  |
+----+-----------+-------------+----------+------------+-----------------------------------------+
31 rows in set (0.00 sec)

mysql> SELECT * FROM SERVICIOS WHERE precio <= 150;
+----+-------------------------+--------+
| id | nombre                  | precio |
+----+-------------------------+--------+
|  1 | Corte de Cabello Niño   |  60.00 |
|  2 | Corte de Cabello Hombre |  80.00 |
|  3 | Corte de Barba          |  60.00 |
|  4 | Peinado Mujer           |  80.00 |
|  5 | Peinado Hombre          |  60.00 |
|  8 | Lavado de Cabello       |  50.00 |
|  9 | Tratamiento Capilar     | 150.00 |
+----+-------------------------+--------+
7 rows in set (0.00 sec)

mysql> SELECT * FROM SERVICIOS WHERE precio BETWEEN 100 AND 200;
+----+---------------------+--------+
| id | nombre              | precio |
+----+---------------------+--------+
|  9 | Tratamiento Capilar | 150.00 |
+----+---------------------+--------+
1 row in set (0.01 sec)

mysql> SELECT COUNT(id), fecha
    -> FROM RESERVACIONES GROUP BY
    -> fecha ORDER BY
    -> COUNT(id) DESC;
+-----------+------------+
| COUNT(id) | fecha      |
+-----------+------------+
|         7 | 2021-07-02 |
|         6 | 2021-06-28 |
|         6 | 2021-07-30 |
|         6 | 2021-06-25 |
|         6 | 2021-07-01 |
+-----------+------------+
5 rows in set (0.01 sec)

mysql> SELECT SUM(precio) AS TOTALSERVICIOS FROM SERVICIOS;
+----------------+
| TOTALSERVICIOS |
+----------------+
|        1240.00 |
+----------------+
1 row in set (0.00 sec)

mysql> SELECT MIN(precio) AS PRECIOMENOR FROM SERVICIOS;
+-------------+
| PRECIOMENOR |
+-------------+
|       50.00 |
+-------------+
1 row in set (0.00 sec)

mysql> SELECT MAX(precio) AS PRECIOMAYOR FROM SERVICIOS;
+-------------+
| PRECIOMAYOR |
+-------------+
|      400.00 |
+-------------+
1 row in set (0.00 sec)

mysql> SELECT * FROM SERVICIOS WHERE nombre LIKE 'Corte%';
+----+-------------------------+--------+
| id | nombre                  | precio |
+----+-------------------------+--------+
|  1 | Corte de Cabello Niño   |  60.00 |
|  2 | Corte de Cabello Hombre |  80.00 |
|  3 | Corte de Barba          |  60.00 |
+----+-------------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT * FROM SERVICIOS WHERE nombre LIKE 'Lavado%';
+----+-------------------+--------+
| id | nombre            | precio |
+----+-------------------+--------+
|  8 | Lavado de Cabello |  50.00 |
+----+-------------------+--------+
1 row in set (0.00 sec)

mysql> SELECT * FROM SERVICIOS WHERE nombre LIKE '%Cabello';
+----+-------------------+--------+
| id | nombre            | precio |
+----+-------------------+--------+
|  8 | Lavado de Cabello |  50.00 |
+----+-------------------+--------+
1 row in set (0.00 sec)

mysql> SELECT * FROM SERVICIOS WHERE nombre LIKE '%Cabello%';
+----+-------------------------+--------+
| id | nombre                  | precio |
+----+-------------------------+--------+
|  1 | Corte de Cabello Niño   |  60.00 |
|  2 | Corte de Cabello Hombre |  80.00 |
|  8 | Lavado de Cabello       |  50.00 |
+----+-------------------------+--------+
3 rows in set (0.00 sec)

mysql> SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo FROM RESERVACIONES;
+--------------------+
| nombre_completo    |
+--------------------+
| Juan De la torre   |
| Antonio Hernandez  |
| Pedro Juarez       |
| Mireya Perez       |
| Jose Castillo      |
| Maria Diaz         |
| Clara Duran        |
| Miriam Ibañez      |
| Samuel Reyes       |
| Joaquin Muñoz      |
| Julia Lopez        |
| Carmen Ruiz        |
| Isaac Sala         |
| Ana Preciado       |
| Sergio Iglesias    |
| Aina Acosta        |
| Carlos Ortiz       |
| Roberto Serrano    |
| Carlota Perez      |
| Ana Maria Igleias  |
| Jaime Jimenez      |
| Roberto Torres     |
| Juan Cano          |
| Santiago Hernandez |
| Berta Gomez        |
| Miriam Dominguez   |
| Antonio Castro     |
| Hugo Alonso        |
| Victoria Perez     |
| Jimena Leon        |
| Raquel Peña        |
+--------------------+
31 rows in set (0.00 sec)

mysql> SELECT * FROM RESERVACIONES
    -> WHERE CONCAT(nombre, ' ', apellido) LIKE '%Ana Preciado%';
+----+--------+----------+----------+------------+------------------------+
| id | nombre | apellido | hora     | fecha      | servicios              |
+----+--------+----------+----------+------------+------------------------+
| 14 | Ana    | Preciado | 14:30:00 | 2021-06-28 | Corte de Cabello Mujer |
+----+--------+----------+----------+------------+------------------------+
1 row in set (0.00 sec)

mysql> SELECT hora, fecha, CONCAT(nombre, ' ', apellido) as nombre_completo
    -> FROM RESERVACIONES
    -> WHERE CONCAT(nombre, ' ', apellido)
    -> LIKE '%Ana Preciado%';
+----------+------------+-----------------+
| hora     | fecha      | nombre_completo |
+----------+------------+-----------------+
| 14:30:00 | 2021-06-28 | Ana Preciado    |
+----------+------------+-----------------+
1 row in set (0.00 sec)

mysql> SELECT * FROM RESERVACIONES WHERE id IN(1,3);
+----+--------+-------------+----------+------------+-----------------------------------------+
| id | nombre | apellido    | hora     | fecha      | servicios                               |
+----+--------+-------------+----------+------------+-----------------------------------------+
|  1 | Juan   | De la torre | 10:30:00 | 2021-06-28 | Corte de Cabello Adulto, Corte de Barba |
|  3 | Pedro  | Juarez      | 20:00:00 | 2021-06-25 | Corte de Cabello Adulto                 |
+----+--------+-------------+----------+------------+-----------------------------------------+
2 rows in set (0.00 sec)

mysql> SELECT * FROM RESERVACIONES WHERE CONCAT(nombre, ' ', apellido) as 'Nombre Completo' id IN(1,3);
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'as 'Nombre Completo' id IN(1,3)' at line 1
mysql> SELECT * FROM RESERVACIONES;
+----+-----------+-------------+----------+------------+-----------------------------------------+
| id | nombre    | apellido    | hora     | fecha      | servicios                               |
+----+-----------+-------------+----------+------------+-----------------------------------------+
|  1 | Juan      | De la torre | 10:30:00 | 2021-06-28 | Corte de Cabello Adulto, Corte de Barba |
|  2 | Antonio   | Hernandez   | 14:00:00 | 2021-07-30 | Corte de Cabello Niño                   |
|  3 | Pedro     | Juarez      | 20:00:00 | 2021-06-25 | Corte de Cabello Adulto                 |
|  4 | Mireya    | Perez       | 19:00:00 | 2021-06-25 | Peinado Mujer                           |
|  5 | Jose      | Castillo    | 14:00:00 | 2021-07-30 | Peinado Hombre                          |
|  6 | Maria     | Diaz        | 14:30:00 | 2021-06-25 | Tinte                                   |
|  7 | Clara     | Duran       | 10:00:00 | 2021-07-01 | Uñas, Tinte, Corte de Cabello Mujer     |
|  8 | Miriam    | Ibañez      | 09:00:00 | 2021-07-01 | Tinte                                   |
|  9 | Samuel    | Reyes       | 10:00:00 | 2021-07-02 | Tratamiento Capilar                     |
| 10 | Joaquin   | Muñoz       | 19:00:00 | 2021-06-28 | Tratamiento Capilar                     |
| 11 | Julia     | Lopez       | 08:00:00 | 2021-06-25 | Tinte                                   |
| 12 | Carmen    | Ruiz        | 20:00:00 | 2021-07-01 | Uñas                                    |
| 13 | Isaac     | Sala        | 09:00:00 | 2021-07-30 | Corte de Cabello Adulto                 |
| 14 | Ana       | Preciado    | 14:30:00 | 2021-06-28 | Corte de Cabello Mujer                  |
| 15 | Sergio    | Iglesias    | 10:00:00 | 2021-07-02 | Corte de Cabello Adulto                 |
| 16 | Aina      | Acosta      | 14:00:00 | 2021-07-30 | Uñas                                    |
| 17 | Carlos    | Ortiz       | 20:00:00 | 2021-06-25 | Corte de Cabello Niño                   |
| 18 | Roberto   | Serrano     | 10:00:00 | 2021-07-30 | Corte de Cabello Niño                   |
| 19 | Carlota   | Perez       | 14:00:00 | 2021-07-01 | Uñas                                    |
| 20 | Ana Maria | Igleias     | 14:00:00 | 2021-07-02 | Uñas, Tinte                             |
| 21 | Jaime     | Jimenez     | 14:00:00 | 2021-07-01 | Corte de Cabello Niño                   |
| 22 | Roberto   | Torres      | 10:00:00 | 2021-07-02 | Corte de Cabello Adulto                 |
| 23 | Juan      | Cano        | 09:00:00 | 2021-07-02 | Corte de Cabello Niño                   |
| 24 | Santiago  | Hernandez   | 19:00:00 | 2021-06-28 | Corte de Cabello Niño                   |
| 25 | Berta     | Gomez       | 09:00:00 | 2021-07-01 | Uñas                                    |
| 26 | Miriam    | Dominguez   | 19:00:00 | 2021-06-28 | Corte de Cabello Niño                   |
| 27 | Antonio   | Castro      | 14:30:00 | 2021-07-02 | Corte de Cabello Adulti                 |
| 28 | Hugo      | Alonso      | 09:00:00 | 2021-06-28 | Corte de Barba                          |
| 29 | Victoria  | Perez       | 10:00:00 | 2021-07-02 | Uñas, Tinte                             |
| 30 | Jimena    | Leon        | 10:30:00 | 2021-07-30 | Uñas, Corte de Cabello Mujer            |
| 31 | Raquel    | Peña        | 20:30:00 | 2021-06-25 | Corte de Cabello Mujer                  |
+----+-----------+-------------+----------+------------+-----------------------------------------+
31 rows in set (0.00 sec)

mysql> SELECT * FROM RESERVACIONES WHERE fecha = '2021-06-28' AND id IN(26, 28);
+----+--------+-----------+----------+------------+-----------------------+
| id | nombre | apellido  | hora     | fecha      | servicios             |
+----+--------+-----------+----------+------------+-----------------------+
| 26 | Miriam | Dominguez | 19:00:00 | 2021-06-28 | Corte de Cabello Niño |
| 28 | Hugo   | Alonso    | 09:00:00 | 2021-06-28 | Corte de Barba        |
+----+--------+-----------+----------+------------+-----------------------+
2 rows in set (0.01 sec)

mysql> SELECT * FROM RESERVACIONES WHERE fecha = '2021-06-28' AND id IN(1, 3);
+----+--------+-------------+----------+------------+-----------------------------------------+
| id | nombre | apellido    | hora     | fecha      | servicios                               |
+----+--------+-------------+----------+------------+-----------------------------------------+
|  1 | Juan   | De la torre | 10:30:00 | 2021-06-28 | Corte de Cabello Adulto, Corte de Barba |
+----+--------+-------------+----------+------------+-----------------------------------------+
1 row in set (0.00 sec)

mysql> SELECT * FROM RESERVACIONES WHERE fecha = '2021-06-28' AND id IN(1, 20);
+----+--------+-------------+----------+------------+-----------------------------------------+
| id | nombre | apellido    | hora     | fecha      | servicios                               |
+----+--------+-------------+----------+------------+-----------------------------------------+
|  1 | Juan   | De la torre | 10:30:00 | 2021-06-28 | Corte de Cabello Adulto, Corte de Barba |
+----+--------+-------------+----------+------------+-----------------------------------------+
1 row in set (0.00 sec)

mysql> SELECT * FROM RESERVACIONES WHERE fecha = '2021-06-28' AND id BETWEEN 1 AND 10;
+----+---------+-------------+----------+------------+-----------------------------------------+
| id | nombre  | apellido    | hora     | fecha      | servicios                               |
+----+---------+-------------+----------+------------+-----------------------------------------+
|  1 | Juan    | De la torre | 10:30:00 | 2021-06-28 | Corte de Cabello Adulto, Corte de Barba |
| 10 | Joaquin | Muñoz       | 19:00:00 | 2021-06-28 | Tratamiento Capilar                     |
+----+---------+-------------+----------+------------+-----------------------------------------+
2 rows in set (0.00 sec)

mysql>
```

## Denormalizacion

La denormalización es el proceso de modificar la estructura de una base de datos relacional normalizada para mejorar el rendimiento de las consultas o simplificar la manipulación de los datos a costa de redundancia de datos y pérdida de alguna forma normal. Contrario a la normalización, que busca eliminar la redundancia y mejorar la integridad de los datos, la denormalización introduce redundancias controladas y, a veces, sacrifica la integridad en aras de mejorar el rendimiento de las consultas.

Aquí hay algunos conceptos clave relacionados con la denormalización:

### 1. Rendimiento de Consultas:

La denormalización se utiliza a menudo para mejorar el rendimiento de las consultas al reducir el número de tablas que deben unirse y simplificar las operaciones de consulta. Al agregar redundancia de datos y combinar tablas relacionadas, se pueden evitar operaciones costosas de unión y agrupamiento.

### 2. Desnormalización Controlada:

La denormalización suele ser un proceso controlado y deliberado, donde se elige cuidadosamente qué tablas y relaciones denormalizar para obtener el máximo beneficio en términos de rendimiento sin comprometer demasiado la integridad de los datos.

### 3. Almacenamiento de Datos Redundantes:

En una base de datos denormalizada, es común que los mismos datos se almacenen en múltiples lugares para evitar operaciones de unión costosas. Esto puede aumentar el tamaño total de la base de datos, pero puede mejorar significativamente el rendimiento de las consultas.

### 4. Mantenimiento de la Integridad:

Uno de los desafíos de la denormalización es mantener la integridad de los datos en presencia de redundancia. Es importante implementar mecanismos de control de integridad, como disparadores y procedimientos almacenados, para garantizar que los datos redundantes se actualicen correctamente y permanezcan sincronizados.

### 5. Casos de Uso:

La denormalización se utiliza comúnmente en casos de uso donde el rendimiento de las consultas es crítico y la actualización de datos es menos frecuente o está controlada. Esto puede incluir sistemas de informes, aplicaciones analíticas y almacenes de datos.

### 6. Consideraciones de Diseño:

Al denormalizar una base de datos, es importante evaluar cuidadosamente los requisitos de rendimiento y los compromisos de integridad de los datos. Se debe equilibrar el rendimiento de las consultas con la necesidad de mantener la integridad y consistencia de los datos.

En resumen, la denormalización es un proceso que implica introducir redundancia controlada en una base de datos relacional normalizada para mejorar el rendimiento de las consultas. Si bien puede mejorar significativamente el rendimiento en ciertos casos de uso, también introduce desafíos adicionales en el mantenimiento de la integridad de los datos y debe aplicarse con precaución y consideración.

### Aplicando la normalizacion

```
PowerShell 7.4.1
Loading personal and system profiles took 2860ms.
 angel  mysql -u root -pL4c1b0rgv4c4#
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 8
Server version: 8.0.34 MySQL Community Server - GPL

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| anime              |
| appsalon           |
| bd_productos       |
| bd_tienda          |
| biblioteca         |
| control_escolar    |
| db_springboot      |
| information_schema |
| mysql              |
| pd-act-1           |
| performance_schema |
| sakila             |
| sys                |
| world              |
+--------------------+
14 rows in set (0.01 sec)

mysql> use appsalon;
Database changed
mysql> SHOW TABLES;
+--------------------+
| Tables_in_appsalon |
+--------------------+
| reservaciones      |
| servicios          |
+--------------------+
2 rows in set (0.01 sec)

mysql> describe servicios;
+--------+---------------+------+-----+---------+----------------+
| Field  | Type          | Null | Key | Default | Extra          |
+--------+---------------+------+-----+---------+----------------+
| id     | int           | NO   | PRI | NULL    | auto_increment |
| nombre | varchar(60)   | NO   |     | NULL    |                |
| precio | decimal(11,2) | NO   |     | NULL    |                |
+--------+---------------+------+-----+---------+----------------+
3 rows in set (0.01 sec)

mysql> describe reservaciones;
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| id        | int          | NO   | PRI | NULL    | auto_increment |
| nombre    | varchar(60)  | NO   |     | NULL    |                |
| apellido  | varchar(60)  | NO   |     | NULL    |                |
| hora      | time         | YES  |     | NULL    |                |
| fecha     | date         | YES  |     | NULL    |                |
| servicios | varchar(255) | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
6 rows in set (0.00 sec)

mysql> select * from reservaciones;
+----+-----------+-------------+----------+------------+-----------------------------------------+
| id | nombre    | apellido    | hora     | fecha      | servicios                               |
+----+-----------+-------------+----------+------------+-----------------------------------------+
|  1 | Juan      | De la torre | 10:30:00 | 2021-06-28 | Corte de Cabello Adulto, Corte de Barba |
|  2 | Antonio   | Hernandez   | 14:00:00 | 2021-07-30 | Corte de Cabello Niño                   |
|  3 | Pedro     | Juarez      | 20:00:00 | 2021-06-25 | Corte de Cabello Adulto                 |
|  4 | Mireya    | Perez       | 19:00:00 | 2021-06-25 | Peinado Mujer                           |
|  5 | Jose      | Castillo    | 14:00:00 | 2021-07-30 | Peinado Hombre                          |
|  6 | Maria     | Diaz        | 14:30:00 | 2021-06-25 | Tinte                                   |
|  7 | Clara     | Duran       | 10:00:00 | 2021-07-01 | Uñas, Tinte, Corte de Cabello Mujer     |
|  8 | Miriam    | Ibañez      | 09:00:00 | 2021-07-01 | Tinte                                   |
|  9 | Samuel    | Reyes       | 10:00:00 | 2021-07-02 | Tratamiento Capilar                     |
| 10 | Joaquin   | Muñoz       | 19:00:00 | 2021-06-28 | Tratamiento Capilar                     |
| 11 | Julia     | Lopez       | 08:00:00 | 2021-06-25 | Tinte                                   |
| 12 | Carmen    | Ruiz        | 20:00:00 | 2021-07-01 | Uñas                                    |
| 13 | Isaac     | Sala        | 09:00:00 | 2021-07-30 | Corte de Cabello Adulto                 |
| 14 | Ana       | Preciado    | 14:30:00 | 2021-06-28 | Corte de Cabello Mujer                  |
| 15 | Sergio    | Iglesias    | 10:00:00 | 2021-07-02 | Corte de Cabello Adulto                 |
| 16 | Aina      | Acosta      | 14:00:00 | 2021-07-30 | Uñas                                    |
| 17 | Carlos    | Ortiz       | 20:00:00 | 2021-06-25 | Corte de Cabello Niño                   |
| 18 | Roberto   | Serrano     | 10:00:00 | 2021-07-30 | Corte de Cabello Niño                   |
| 19 | Carlota   | Perez       | 14:00:00 | 2021-07-01 | Uñas                                    |
| 20 | Ana Maria | Igleias     | 14:00:00 | 2021-07-02 | Uñas, Tinte                             |
| 21 | Jaime     | Jimenez     | 14:00:00 | 2021-07-01 | Corte de Cabello Niño                   |
| 22 | Roberto   | Torres      | 10:00:00 | 2021-07-02 | Corte de Cabello Adulto                 |
| 23 | Juan      | Cano        | 09:00:00 | 2021-07-02 | Corte de Cabello Niño                   |
| 24 | Santiago  | Hernandez   | 19:00:00 | 2021-06-28 | Corte de Cabello Niño                   |
| 25 | Berta     | Gomez       | 09:00:00 | 2021-07-01 | Uñas                                    |
| 26 | Miriam    | Dominguez   | 19:00:00 | 2021-06-28 | Corte de Cabello Niño                   |
| 27 | Antonio   | Castro      | 14:30:00 | 2021-07-02 | Corte de Cabello Adulti                 |
| 28 | Hugo      | Alonso      | 09:00:00 | 2021-06-28 | Corte de Barba                          |
| 29 | Victoria  | Perez       | 10:00:00 | 2021-07-02 | Uñas, Tinte                             |
| 30 | Jimena    | Leon        | 10:30:00 | 2021-07-30 | Uñas, Corte de Cabello Mujer            |
| 31 | Raquel    | Peña        | 20:30:00 | 2021-06-25 | Corte de Cabello Mujer                  |
+----+-----------+-------------+----------+------------+-----------------------------------------+
31 rows in set (0.01 sec)

mysql> select * from servicios;
+----+-------------------------+--------+
| id | nombre                  | precio |
+----+-------------------------+--------+
|  1 | Corte de Cabello Niño   |  60.00 |
|  2 | Corte de Cabello Hombre |  80.00 |
|  3 | Corte de Barba          |  60.00 |
|  4 | Peinado Mujer           |  80.00 |
|  5 | Peinado Hombre          |  60.00 |
|  6 | Tinte                   | 300.00 |
|  7 | Uñas                    | 400.00 |
|  8 | Lavado de Cabello       |  50.00 |
|  9 | Tratamiento Capilar     | 150.00 |
+----+-------------------------+--------+
9 rows in set (0.00 sec)

mysql> drop table reservaciones;
Query OK, 0 rows affected (0.02 sec)

mysql> create table clientes (
    -> id INTT(11) not null auto_increment,
    -> nombre varchar(60) not null,
    -> apellido varchar(60) not null,
    -> telefono varchar(10) not null,
    -> email varchar(30) not null unique,
    -> primary key (id)
    -> );
ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'INTT(11) not null auto_increment,
nombre varchar(60) not null,
apellido varchar(' at line 2
mysql> create table clientes (
    -> id int(11) not null auto_increment,
    -> nombre varchar(60) not null,
    -> apellido varchar(60) not null,
    -> telefono varchar(10) not null,
    -> email varchar(30) not null unique,
    -> primary key (id)
    -> );
Query OK, 0 rows affected, 1 warning (0.02 sec)

mysql> show tables;
+--------------------+
| Tables_in_appsalon |
+--------------------+
| clientes           |
| servicios          |
+--------------------+
2 rows in set (0.00 sec)

mysql> insert into clientes (nombre, apellido, telefono, email) values ('Angel Sebastian', 'Franco Lopez', '1111111111', 'correo@correo.com');
Query OK, 1 row affected (0.02 sec)

mysql> create table citas (
    -> id int(11) not null auto_increment,
    -> fecha date not null,
    -> hora time not null,
    -> clienteId int(11) not null,
    -> primary key (id),
    -> key clienteId (clienteId),
    -> constraint cliente_fk
    -> foreign key (clienteId)
    -> references clientes (id)
    -> );
Query OK, 0 rows affected, 2 warnings (0.05 sec)

mysql> show tables;
+--------------------+
| Tables_in_appsalon |
+--------------------+
| citas              |
| clientes           |
| servicios          |
+--------------------+
3 rows in set (0.00 sec)

mysql> describe citas;
+-----------+------+------+-----+---------+----------------+
| Field     | Type | Null | Key | Default | Extra          |
+-----------+------+------+-----+---------+----------------+
| id        | int  | NO   | PRI | NULL    | auto_increment |
| fecha     | date | NO   |     | NULL    |                |
| hora      | time | NO   |     | NULL    |                |
| clienteId | int  | NO   | MUL | NULL    |                |
+-----------+------+------+-----+---------+----------------+
4 rows in set (0.00 sec)

mysql> describe clientes
    -> ;
+----------+-------------+------+-----+---------+----------------+
| Field    | Type        | Null | Key | Default | Extra          |
+----------+-------------+------+-----+---------+----------------+
| id       | int         | NO   | PRI | NULL    | auto_increment |
| nombre   | varchar(60) | NO   |     | NULL    |                |
| apellido | varchar(60) | NO   |     | NULL    |                |
| telefono | varchar(10) | NO   |     | NULL    |                |
| email    | varchar(30) | NO   | UNI | NULL    |                |
+----------+-------------+------+-----+---------+----------------+
5 rows in set (0.00 sec)

mysql> insert into citas (fecha, hora, clienteId) values
    -> ('2024-02-28', '18:50:00', 1);
Query OK, 1 row affected (0.01 sec)

mysql> select * from citas;
+----+------------+----------+-----------+
| id | fecha      | hora     | clienteId |
+----+------------+----------+-----------+
|  1 | 2024-02-28 | 18:50:00 |         1 |
+----+------------+----------+-----------+
1 row in set (0.00 sec)

mysql>
```
