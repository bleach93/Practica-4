const MEmpleado = require('../../models/MEmpleado');


module.exports = class EmpleadosEmpleadoController {
    static async post(req, res){
        const interfazEmpleado = {
            nombre: '',
            correo: '',
            celular: '',
            apellidoPaterno: '',
            apellidoMaterno: '',
            fechaRegistro: new Date(),
            estatus: true,
        };

        const data = Object.assign(interfazEmpleado,req.body);

        if(!data.nombre || !data.correo || !data.celular || !data.apellidoMaterno || !data.apellidoPaterno){
            res.status(500).json({error: 'Favor de ingresar la informacion correcta'});
            return;
        }
        const empleado = await MEmpleado.create(data);
        res.status(200).json({
            id: empleado.id,
        });
    }

    //se agrega el metodo get de la parte 2-12
    static async get(req, res){
        const empleadoId = req.query.empleadoId ? + req.query.empleadoId: 0;
        let where = {
            estatus : true,
        }
        if (empleadoId){
            where.id = empleadoId
        }
        const data = await MEmpleado.findAll({
            attributes: ['id','nombre','apellidoPaterno','apellidoMaterno','correo','celular','estatus'],
            where,
        });
        if (!data){
            res.status(500).json({error: 'No se encontraron resultados'});
            return;
        }
        return res.render('formulario', {data: data})
    }
}