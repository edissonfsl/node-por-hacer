const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de una tarea por hacer'
}

const completado = {
    alias: 'c',
    type: 'boolean',
    desc: 'Booleano del estado de la tarea'
}

const argv = require('yargs')
    .command('crear', `Crea una tarea por hacer.`, {
        descripcion
    })
    .command('borrar', `Elimina una tarea por hacer.`, {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea por hacer.', {
        descripcion,
        completado
    })
    .command('listar', 'Lista todas las tarea por hacer.', {
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
};