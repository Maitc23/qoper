const controller = {};

const User = require('../models/user');


controller.userProveedor = async (req,res, next) => { 
    
    const user = await User.findById(req.params, { password: 0 ,jobs: 0});
    
    if(!user){
        return res.status(404).send('USER NOT FOUND')
    }

    res.json(user)
}

module.exports = controller;