// Importa el módulo 'express' para crear rutas y gestionar solicitudes HTTP.
import express from 'express';

// Importa la conexión a la base de datos desde el archivo 'connection.js'.
import db from '../db/connection.js';

// Crea un router de Express que permite definir rutas específicas para esta funcionalidad.
const router = express.Router();

// **Crear users**
// Ruta POST para crear un nuevo users.
router.post('/create', (req, res) => {
  const { nombre, email, password } = req.body; // Obtiene los valores 'nombre' y 'email' enviados en el cuerpo de la solicitud.

  // Define la consulta SQL para insertar un nuevo usuario en la tabla 'users'.
  const query = 'INSERT INTO users (nombre, email, password) VALUES (?, ?, ?)';

  // Ejecuta la consulta en la base de datos.
  db.query(query, [nombre, email, password], (err, result) => {
    if (err) {
      // Si ocurre un error, responde con un código 500 (Error interno del servidor) y envía el mensaje de error.
      return res.status(500).json({ error: err.message });
    }
    // Si la consulta es exitosa, responde con un código 201 (Creado) y un mensaje de éxito.
    res.status(201).json({ message: 'Usuario creado con éxito' });
  });
});

// **Listar usuarios**
// Ruta GET para obtener la lista de todos los usuarios.
router.get('/list', (req, res) => {
  // Define la consulta SQL para seleccionar todos los usuarios de la tabla 'usuarios'.
  const query = 'SELECT * FROM users';

  // Ejecuta la consulta en la base de datos.
  db.query(query, (err, results) => {
    if (err) {
      // Si ocurre un error, responde con un código 500 (Error interno del servidor) y envía el mensaje de error.
      return res.status(500).json({ error: err.message });
    }
    // Si la consulta es exitosa, responde con un código 200 (OK) y envía los resultados como JSON.
    res.status(200).json(results);
  });
});

// **Editar users**
// Ruta PUT para actualizar un users existente.
router.put('/edit/:id', (req, res) => {
  const { id } = req.params; // Obtiene el ID del users desde los parámetros de la URL.
  const { nombre, email, password } = req.body; // Obtiene los valores 'nombre' y 'email' enviados en el cuerpo de la solicitud.

  // Define la consulta SQL para actualizar los campos 'nombre' y 'email' de un users por su ID.
  const query = 'UPDATE users SET nombre = ?, email = ?, password = ? WHERE id = ?';

  // Ejecuta la consulta en la base de datos.
  db.query(query, [nombre, email, password, id], (err) => {
    if (err) {
      // Si ocurre un error, responde con un código 500 (Error interno del servidor) y envía el mensaje de error.
      return res.status(500).json({ error: err.message });
    }
    // Si la consulta es exitosa, responde con un código 200 (OK) y un mensaje de éxito.
    res.status(200).json({ message: 'users actualizado con éxito' });
  });
});

// **Eliminar users**
// Ruta DELETE para eliminar un users por su ID.
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params; // Obtiene el ID del users desde los parámetros de la URL.

  // Define la consulta SQL para eliminar un users de la tabla 'usuarios' por su ID.
  const query = 'DELETE FROM users WHERE id = ?';

  // Ejecuta la consulta en la base de datos.
  db.query(query, [id], (err) => {
    if (err) {
      // Si ocurre un error, responde con un código 500 (Error interno del servidor) y envía el mensaje de error.
      return res.status(500).json({ error: err.message });
    }
    // Si la consulta es exitosa, responde con un código 200 (OK) y un mensaje de éxito.
    res.status(200).json({ message: 'users eliminado con éxito' });
  });
});

// Exporta el router para que pueda ser utilizado en otros archivos, como 'server.js'.
export default router;
