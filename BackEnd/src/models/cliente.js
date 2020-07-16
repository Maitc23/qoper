const {Schema, model} = require('mongoose');


const clientSchema = new Schema( {

    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    }
}, {
    timestamps: true
});



module.exports = model('Client', clientSchema);