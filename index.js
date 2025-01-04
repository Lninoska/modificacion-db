const consultadatos = require('./queries/consulta')
const ingreso = require('./queries/ingreso')
const actualizar = require('./queries/actualizar')
const eliminar = require('./queries/eliminar')



const main = async() => {
    try{
        await consultadatos()
        const ingresoalumno = await ingreso(15, 'Laura', 'Vilches', 9123874, 28)
        console.log('Datos Ingresados', ingresoalumno)
        const actualizarNombre = await actualizar(15, 'Mía')
        console.log('Datos actualizados', actualizarNombre)
        const eliminarId = await eliminar(11)
        console.log('Datos eliminados', eliminarId)
    } catch(error){
        console.error('Hubo algún error en index', error.message)
    }
}

main()