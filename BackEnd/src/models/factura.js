const {Schema, model } = require('moongose');

const facturaSchema = new Schema( {
    
    fecha: {
        type: Date,
        default: Date.now
    },

    job: {
        type: Schema.Types.ObjectId,
        ref: 'Jobs'
    },

    total: {
        type: Number,
    },

    cliente: {
        type: Schema.Types.ObjectId, 
        ref: 'Client'
    },

    proveedor: {
        type: Schema.Types.ObjectId,
        ref: 'Proveedor'
    }

})