# Proyecto TodoApp

Este proyecto consiste en una aplicación de **gestión de tareas**. El proyecto está dividido en un **frontend** y un **backend**. El backend utiliza una base de datos **MySQL** local llamada `tasksdb` para almacenar las tareas.

## Requisitos

Asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org) (recomendado la versión LTS)
- [MySQL](https://dev.mysql.com/downloads/installer/)
- [Git](https://git-scm.com/)

## Instalación

### 1. Clonar el repositorio

Clona este repositorio en tu máquina local:
- git clone https://github.com/wreyesa/todoApp.git
- cd todoApp


### 2. **Explicación adicional sobre la base de datos**

1. **Conexión a la base de datos:**
   En tu archivo `db.js`, está la configuración a la conexión a MySQL usando `mysql2/promise`. Asegúrate de que todos los que utilicen el proyecto tengan acceso a la base de datos y configuren correctamente los parámetros de conexión en el archivo `.env`.

2. **SQL para crear las tablas:**
   Instrucciones para crear la base de datos y las tablas necesarias.

   CREATE DATABASE tasksdb;

   CREATE TABLE tasks (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200) NOT NULL,
    description VARCHAR(300),
    done BOOLEAN NOT NULL DEFAULT 0,
    createAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


