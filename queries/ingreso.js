const pool = require('../db/config')

const ingresoDatos = async (id, nombres, apellidos, n_identificacion, edad) => {
    const query = 'INSERT INTO estudiantes (id, nombres, apellidos, n_identificacion, edad) VALUES ($1, $2, $3, $4, $5)';
    const values = [id, nombres, apellidos, n_identificacion, edad];


    try {
        const result = await pool.query(query, values);
        return result.rows[0]
    } catch (error) {
        console.log('Error al ingresar nuevo estudiante', error.message)
    }
}

module.exports =  { ingresoDatos }