const pool = require('../db/config')

const consultadatos = async() => {
    try{
        const result = await pool.query('SELECT * FROM estudiantes')
        console.log(result.rows);
    } catch (error){
        console.log('Hubo algún error', error.message)
    }
}

module.exports = consultadatos