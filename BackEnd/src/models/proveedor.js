const {Schema, model} = require('mongoose');


const proveedorSchema = new Schema( {

    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },

    ranking: {
        type: Number,
        default: 0
    }
    

}, {
    timestamps: true
});



module.exports = model('Proveedor', proveedorSchema);