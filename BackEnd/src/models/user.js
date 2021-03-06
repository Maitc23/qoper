const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');


const userSchema = new Schema( {

    nombre: String, 
    apellido: String, 
    userType: {
        type: Number,
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true
    }, 
    password: {
        type: String, 
        required: true, 
        minlength: 5
    },
    jobs: [{
        type: Schema.Types.ObjectId,
        ref: 'Jobs'
    }]
});

userSchema.methods.encryptPassword = async (password) => { 
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);

};

userSchema.methods.validatePassword = function (password) { 
   return  bcrypt.compare(password, this.password);
};

module.exports = model('Users', userSchema);