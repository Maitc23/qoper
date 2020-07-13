const {Schema, model} = require('mongoose');


const jobSchema = new Schema( {

    titulo: {
        type: String,
        required: true
    }, 
    fecha: {
        type: Date,
        default: Date.now
    },
    tipoMantenimiento: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    telefono: {
        type: String,
        required: true
    }, 
    estado: {
        type: Number,
        required: true,
        default: 1
    },
    solicitante: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },  
}, {
    timestamps: true
});



module.exports = model('Jobs', jobSchema);