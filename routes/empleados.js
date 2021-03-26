const express = require ('express');
const router = express.Router();

const EmpleadosEmpleadoController = require('../controllers/empleados/empleado');

router.get('/empleados', EmpleadosEmpleadoController.get);

router.post('/api/empleados', EmpleadosEmpleadoController.post);


module.exports = router;