// Importa el módulo 'express' para crear rutas y gestionar solicitudes HTTP.
import express from 'express';

// Importa la conexión a la base de datos desde el archivo 'connection.js'.
import db from '../db/connection.js';

// Crea un router de Express que permite definir rutas específicas para esta funcionalidad.
const router = express.Router();

// **Crear usuario**
// Ruta POST para crear un nuevo usuario.
router.post('/create', (req, res) => {
  const { nombre, email } = req.body; // Obtiene los valores 'nombre' y 'email' enviados en el cuerpo de la solicitud.

  // Define la consulta SQL para insertar un nuevo usuario en la tabla 'usuarios'.
  const query = 'INSERT INTO usuario (nombre, email) VALUES (?, ?)';

  // Ejecuta la consulta en la base de datos.
  db.query(query, [nombre, email], (err, result) => {
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
  const query = 'SELECT * FROM usuario';

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

// **Editar usuario**
// Ruta PUT para actualizar un usuario existente.
router.put('/edit/:id', (req, res) => {
  const { id } = req.params; // Obtiene el ID del usuario desde los parámetros de la URL.
  const { nombre, email } = req.body; // Obtiene los valores 'nombre' y 'email' enviados en el cuerpo de la solicitud.

  // Define la consulta SQL para actualizar los campos 'nombre' y 'email' de un usuario por su ID.
  const query = 'UPDATE usuario SET nombre = ?, email = ? WHERE id = ?';

  // Ejecuta la consulta en la base de datos.
  db.query(query, [nombre, email, id], (err) => {
    if (err) {
      // Si ocurre un error, responde con un código 500 (Error interno del servidor) y envía el mensaje de error.
      return res.status(500).json({ error: err.message });
    }
    // Si la consulta es exitosa, responde con un código 200 (OK) y un mensaje de éxito.
    res.status(200).json({ message: 'Usuario actualizado con éxito' });
  });
});

// **Eliminar usuario**
// Ruta DELETE para eliminar un usuario por su ID.
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params; // Obtiene el ID del usuario desde los parámetros de la URL.

  // Define la consulta SQL para eliminar un usuario de la tabla 'usuarios' por su ID.
  const query = 'DELETE FROM usuario WHERE id = ?';

  // Ejecuta la consulta en la base de datos.
  db.query(query, [id], (err) => {
    if (err) {
      // Si ocurre un error, responde con un código 500 (Error interno del servidor) y envía el mensaje de error.
      return res.status(500).json({ error: err.message });
    }
    // Si la consulta es exitosa, responde con un código 200 (OK) y un mensaje de éxito.
    res.status(200).json({ message: 'Usuario eliminado con éxito' });
  });
});

// Exporta el router para que pueda ser utilizado en otros archivos, como 'server.js'.
export default router;
