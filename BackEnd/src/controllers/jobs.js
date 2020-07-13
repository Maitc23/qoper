const controller = {};


const Jobs = require('../models/jobs');
const User = require('../models/user')


controller.newJob = async (req, res, next) => {
    try {
        const { titulo, fecha, tipoMantenimiento, ubicacion, descripcion, telefono, estado } = req.body;
        const user = await User.findById(req.userId);

        if(tipoMantenimiento === null) {
            return res.status(400).json({message: "Seleccione su tipo de mantenimiento"})

        }   
        
        const job = new Jobs({
            titulo,
            fecha,
            tipoMantenimiento,
            ubicacion,
            descripcion,
            telefono,
            estado,
            solicitante: user
        })

        await job.save();

        user.jobs.push(job);

        await user.save();

        return res.status(200).json({
            message: 'Trabajo guardado'
        });
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.userJobs = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate('jobs');

        if (user.jobs.length == 0) {
            return res.status(400).json({ message: "No tiene trabajos registrados" })
        }
        
        res.json(user.jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}

controller.jobs = async (req, res, next) => {
    try {
        const jobs = await Jobs.find( {estado: 1 });

        if(jobs.length === 0) {
            return res.status(400).json({ message: "No hay trabajos disponibles" })
        }
        res.json(jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}

controller.updateJob = async (req, res,next) => {
    try{    
        const { titulo, fecha, tipoMantenimiento, ubicacion, descripcion, telefono, estado } = req.body; 
        await Jobs.findOneAndUpdate(req.params, {
            titulo,
            fecha,
            tipoMantenimiento,
            ubicacion,
            descripcion,
            telefono,
            estado
        });
        
        res.json({message: 'Trabajo actualizado'})

    }catch(err) {
        res.status(500).json({ error: err.message });
    }
}

controller.deleteJob = async (req,res, next) => {
    try{ 

         await Jobs.findByIdAndDelete(req.params); 
         
         res.json({message: 'Trabajo borrado'})

    } catch(err) {
        res.status(500).json({ error: err.message });
    }
}
module.exports = controller;