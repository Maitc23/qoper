const controller = {};


const Jobs = require('../models/jobs');
const User = require('../models/user');




controller.getJob = async (req, res, next) => {
    try {
        const job = await Jobs.findById(req.params);

        if (job.length === 0) {
            return res.status(400).json({ message: "Trabajo seleccionado no disponible" })
        }

        res.json(job)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.newJob = async (req, res, next) => {
    try {
        const { titulo, fecha, tipoMantenimiento, ciudad, provincia, corregimiento, calle, residencia, piso, datosExtra, descripcion, telefono, nombreSupervisor, correo, requisitosExtra, estado } = req.body;
        const user = await User.findById(req.userId);

        if (tipoMantenimiento === null) {
            return res.status(400).json({ message: "Seleccione su tipo de mantenimiento" })

        }
        if (!titulo || !descripcion || !ciudad || !provincia || !corregimiento, !calle, !residencia, !nombreSupervisor, !telefono, !fecha) {
            return res.status(400).json({ message: "Ingrese todos los campos requeridos" })
        }

        const job = new Jobs({
            titulo,
            fecha,
            tipoMantenimiento,
            descripcion,
            telefono,
            estado,
            ubicacion: {
                ciudad: ciudad,
                provincia: provincia,
                corregimiento: corregimiento,
                calle: calle,
                residencia: residencia,
                piso: piso,
                datosExtra: datosExtra
            },
            solicitante: user,
            correo,
            nombreSupervisor,
            requisitosExtra
        });

        await job.save();

        user.jobs.push(job);

        await user.save();

        return res.status(200).json({
            message: 'Trabajo guardado'
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log(err.message);
    }
}

controller.userJobs = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate(
            {
                path: 'jobs',
                match: { estado: { $lte: 1 } },
            });

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
        const jobs = await Jobs.find({ estado: 1 });

        if (jobs.length === 0) {
            return res.status(400).json({ message: "No hay trabajos disponibles" })
        }
        res.json(jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }

}

controller.updateJob = async (req, res, next) => {
    try {
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

        res.json({ message: 'Trabajo actualizado' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.deleteJob = async (req, res, next) => {
    try {
        await Jobs.findByIdAndDelete(req.params);

        res.json({ message: 'Trabajo borrado' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.acceptJob = async (req, res, next) => {
    try {
        const { id, precio } = req.body
        const proveedor = await User.findById(req.userId)

  
        const job = await Jobs.findByIdAndUpdate(id, {
            proveedor,
            estado: 2,
            precio
        });

        proveedor.jobs.push(job);
        await proveedor.save();

        return res.status(200).json({ message: 'Trabajo Aceptado' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


controller.getCotizationJobs = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate(
            {
                path: 'jobs',
                match: { estado: 2 },
            });

        if (user.jobs.length == 0) {
            return res.status(400).json({ message: "No tiene trabajos registrados" })
        }

        res.json(user.jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.getAcceptedCotizationJobs = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate(
            {
                path: 'jobs',
                match: { estado: 3 },
            });

        if (user.jobs.length == 0) {
            return res.status(400).json({ message: "No tiene trabajos registrados" })
        }

        res.json(user.jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.getCompletedJob = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate(
            {
                path: 'jobs',
                match: { estado: 6 },
            });

        if (user.jobs.length == 0) {
            return res.status(400).json({ message: "No tiene trabajos registrados" })
        }

        res.json(user.jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.getCancelledJob = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate(
            {
                path: 'jobs',
                match: { estado: 5 },
            });

        if (user.jobs.length == 0) {
            return res.status(400).json({ message: "No tiene trabajos registrados" })
        }

        res.json(user.jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.acceptCotization = async (req, res, next) => {
    try {
        const {id} = req.body
        await Jobs.findByIdAndUpdate(id, {
            estado: 3
        });

        return res.status(200).json({ message: 'Cotizacion Aceptada' });

    } catch (err) {
        res.status(500).json({ error: err.message });

    }
}

controller.completedJob = async (req, res, next) => {
    try {
        const {id} = req.body

        await Jobs.findByIdAndUpdate(id, {
            estado: 6
        });

        return res.status(200).json({ message: 'Trabajo Completado' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


controller.pausedJobs = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId).populate(
            {
                path: 'jobs',
                match: { estado: 4 },
            });

        if (user.jobs.length == 0) {
            return res.status(400).json({ message: "No tiene trabajos registrados" })
        }

        res.json(user.jobs)
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
controller.pauseJob = async (req, res, next) => {
    try {
        const {id} = req.body

        await Jobs.findByIdAndUpdate(id, {
            estado: 4
        });

        return res.status(200).json({ message: 'Trabajo en pausa' });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

controller.cancelledJob = async (req, res, next) => {
    try {
        const {id} = req.body

        const job = await Jobs.findById(id);
        const user = await User.findById(job.proveedor)

        var index = user.jobs.indexOf(id)

        user.jobs.splice(index, 1)

        await User.findByIdAndUpdate(job.proveedor, {
            jobs: user.jobs
        })

        await Jobs.findByIdAndUpdate(id, {
            $unset: { proveedor: "" },
            estado: 5
        });

        return res.status(200).json({ message: 'Trabajo Cancelado' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
}

module.exports = controller;