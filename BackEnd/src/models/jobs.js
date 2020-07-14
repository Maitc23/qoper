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
    ubicacion:{ 
        
        ciudad: {
            type: String,
            required: true
    
        },
        provincia: {
            type: String,
            required: true
    
        },
        corregimiento: {
            type: String,
            required: true
    
        },
        calle: {
            type: String,
            required: true
    
        },
        residencia: {
            type: String,
            required: true
        },
        piso: {
            type: String
        },
        datosExtra: {
            type: String
        }
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
    nombreSupervisor: {
        type: String,
        require: true
    },
    correo: {
        type: String,
    },
    requisitosExtra: {
        type: String
    }
}, {
    timestamps: true
});



module.exports = model('Jobs', jobSchema);