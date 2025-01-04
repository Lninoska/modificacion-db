const pool = require("../db/config");

const actualizar = async(id , nuevoNombre) => {
    const query = 'UPDATE  estudiantes SET nombres = $1 WHERE id = $2 RETURNING *;'
    const values = [ nuevoNombre, id]

    try {
        const result = await pool.query(query, values);
        return result.rows;
    } catch (error) {
        console.log('error en actualizar', error.message)
    }
}

module.exports = actualizar 