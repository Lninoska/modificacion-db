const pool = require("../db/config");

const eliminarId = async(id) => {
    const query = 'DELETE FROM estudiantes WHERE id = $1 RETURNING *;'
    const values = [id]

    try {
        const result = await pool.query(query, values)
        return result.rows
    } catch(error){
        console.log('Error al eliminar dato', error.message)
    }
}

module.exports =  eliminarId