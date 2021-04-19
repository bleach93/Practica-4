const app = require('./app');
const sequelize = require('./db');

const port = 3007; //puerto asignado

(async ()=>{
    await sequelize.sync({ force: false, alter: true});
    app.listen(port,
        ()=> console.info(`Server running on port ${port} http://201.140.116.237:${port}`),//direccion ip
        //direccion 201.140.116.237
    );
})();

app.get('/',function(req,res){
    res.render('./formulario.ejs')
})