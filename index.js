const consultadatos = require('./queries/consulta')
const ingreso = require('./queries/ingreso')



const main = async() => {
    try{
        await consultadatos()
        const ingresoalumno = await ingreso(15, 'Laura', 'Vilches', 9123874, 28)
        console.log('Datos Ingresados', ingresoalumno)
    } catch(error){
        console.error('Hubo algún error en index', error.message)
    }
}

main()