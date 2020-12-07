const descripcion = {
    demand: true,
    alias: 'd',
    descripcion: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    descripcion: 'Marca como completado o pendiente la tarea'
}


const completado2 = {
    alias: 'c',
    default: true,
    type: 'boolean'
}


const argv = require('yargs')
    .command('crear', 'crear un elemento', { descripcion })
    .command('actualizar', 'actualiza el estado completado de una tarea', { descripcion, completado })
    .command('borrar', 'borra la tarea seleccionada', { descripcion })
    .command('listar', 'lista la tarea seleecionada', { completado2 })
    .help()
    .argv;

module.exports = {
    argv
}