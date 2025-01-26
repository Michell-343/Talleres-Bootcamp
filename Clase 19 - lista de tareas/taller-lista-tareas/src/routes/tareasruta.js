import express from 'express'; // Importamos Express
import Tareas from '../models/tareas.js'; // Importamos el modelo Tareas

const router = express.Router();

// POST
router.post('/', async (req, res) => {
    try {
        const nuevaTarea = new Tareas(req.body);
        await nuevaTarea.save();
        res.status(201).json(nuevaTarea);
    } catch (error) {
        res.status(500).json({ 
            message:'Error. Tarea no creada', error
        });
    }
});

//GET

router.get('/', async (req, res) => {
    try {
        const tareas = await Tareas.find();
        res.status(200).json(tareas);
    } catch (error) {
        res.status(500).json({
            message:'Error al obtener datos de la tarea', error
        });
    }
});

//PUT

router.put('/:id', async (req, res) => {
    try {
        const actualizarTarea = await Tareas.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(actualizarTarea);
    }catch (error) {
        res.status(500).json({
            message:'Error al actualizar datos de la tarea', error
        });
    }
});

//DELETE

router.delete('/:id', async (req, res) => {
    try {
        await Tareas.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (error) {
        res.status(500).json({
            message:'Error al eliminar la tarea', error
        });
    }
});

//exportar

export default router;