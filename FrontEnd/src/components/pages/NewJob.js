import React, { useState } from 'react'
import ErrorNotice from '../misc/ErrorNotice';
import SuccessfulNotice from '../misc/SuccessfulNotice';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Axios from 'axios';

export default function NewJob() {

<<<<<<< HEAD
  const [error, setError] = useState();
  const [successful, setSuccessful] = useState();
  const [titulo, setTitle] = useState();
  const [fecha, setDate] = useState(new Date());
  const [tipoMantenimiento, setTipoMantenimiento] = useState(0);
  const [ubicacion, setUbicacion] = useState();
  const [descripcion, setDescripcion] = useState();
  const [telefono, setTelefono] = useState();

  const selectTipoMantenimiento = [
    { id: 1, value: null, name: 'Seleeciona tu tipo de mantenimiento' },
    { id: 2, value: 'Electricidad', name: 'Electricidad' },
    { id: 3, value: 'Refrigeracion', name: 'Refrigeracion' },
    { id: 4, value: 'Plomeria', name: 'Plomeria' },
    { id: 5, value: 'Linea Blanca', name: 'Linea Blanca' },
    { id: 6, value: 'Industrial', name: 'Industrial' },
    { id: 7, value: 'Otro', name: 'Otro' }
  ];

  const submit = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem('x-access-token');

      const newJob = {
        titulo,
        fecha,
        tipoMantenimiento,
        ubicacion,
        descripcion,
        telefono
      };

      const res = await Axios.post('http://localhost:4000/api/job',
        newJob,
        { headers: { 'x-access-token': token } }
      );

      setSuccessful(res.data.message);

    } catch (err) {
      err.response.data.message && setError(err.response.data.message);
    }
  }

  return (
    <div>
      <h2>Nuevo trabajo</h2>
      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}
      {successful && (
        <SuccessfulNotice message={successful} clearSuccessfulNotice={() => setSuccessful(undefined)} />
      )}
      <form onSubmit={submit}>

        <label htmlFor="trabajo-titulo">Titulo</label>
        <input
          id="trabajo-titulo"
          type="text"
          name="titulo"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="trabajo-fecha">Fecha del trabajo</label>
        <DatePicker
          id="trabajo-fecha"
          name="fecha"
          selected={fecha}
          onChange={date => setDate(date)}
        />

        <label htmlFor="trabajo-tipoMantenimiento">Tipo de mantenimiento</label>
        <select
          id="trabajo-tipoMantenimiento"
          name="tipoMantenimientos"
          value={tipoMantenimiento}
          onChange={(e) => setTipoMantenimiento(e.target.value)}
        >
          {selectTipoMantenimiento.map(tipoMantenimiento => (
            <option key={tipoMantenimiento.id} value={tipoMantenimiento.value}>
              {tipoMantenimiento.name}
            </option>
          ))}

        </select>
        <label htmlFor="trabajo-ubicacion">Ubicacion</label>
        <input
          id="trabajo-ubicacion"
          name="ubicacion"
          onChange={(e) => setUbicacion(e.target.value)}
          type="text"
        />
        <label htmlFor="trabajo-descripcion">Descripcion del mantenimiento</label>
        <input
          id="trabajo-descripcion"
          name="descripcion"
          onChange={(e) => setDescripcion(e.target.value)}
          type="text"
        />
        <label htmlFor="trabajo-telefono">Telefono</label>
        <input
          id="trabajo-telefono"
          name="telefono"
          onChange={(e) => setTelefono(e.target.value)}
          type="text"
        />


        <input type="submit" value="New Job" />

      </form>
    </div>
  )
}
=======
    const [error, setError] = useState();
    const [successful, setSuccessful] = useState();
    const [titulo, setTitle] = useState();
    const [fecha, setDate] = useState(new Date());
    const [tipoMantenimiento, setTipoMantenimiento] = useState(0);
    const [ubicacion, setUbicacion] = useState();
    const [descripcion, setDescripcion] = useState();
    const [telefono, setTelefono] = useState();

    const selectTipoMantenimiento = [
        { id: 1, value: null, name: 'Seleeciona tu tipo de mantenimiento' },
        { id: 2, value: 'Electricidad', name: 'Electricidad' },
        { id: 3, value: 'Refrigeracion', name: 'Refrigeracion' },
        { id: 4, value: 'Plomeria', name: 'Plomeria' },
        { id: 5, value: 'Linea Blanca', name: 'Linea Blanca' },
        { id: 6, value: 'Industrial', name: 'Industrial' },
        { id: 7, value: 'Otro', name: 'Otro' }
    ];

    const submit = async (e) => {
        e.preventDefault();
        try {
            let token = localStorage.getItem('x-access-token');

            const newJob = {
                titulo,
                fecha,
                tipoMantenimiento,
                ubicacion,
                descripcion,
                telefono
            };

            const res = await Axios.post('http://localhost:4000/api/job',
                newJob,
                { headers: { 'x-access-token': token } }
            );

            setSuccessful(res.data.message);

        } catch (err) {
            err.response.data.message && setError(err.response.data.message);
        }
    }

    return (
        <div>
            <h2>Nuevo trabajo</h2>
            {error && (
                <ErrorNotice message={error} clearError={() => setError(undefined)} />
            )}
            {successful && (
                <SuccessfulNotice message={successful} clearSuccessfulNotice={() => setSuccessful(undefined)} />
            )}
            <form onSubmit={submit}>

                <label htmlFor="trabajo-titulo">Titulo</label>
                <input
                    id="trabajo-titulo"
                    type="text"
                    name="titulo"
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="trabajo-fecha">Fecha del trabajo</label>
                <DatePicker
                    id="trabajo-fecha"
                    name="fecha"
                    selected={fecha}
                    onChange={date => setDate(date)}
                />

                <label htmlFor="trabajo-tipoMantenimiento">Tipo de mantenimiento</label>
                <select
                    id="trabajo-tipoMantenimiento"
                    name="tipoMantenimientos"
                    value={tipoMantenimiento}
                    onChange={(e) => setTipoMantenimiento(e.target.value)}
                >
                    {selectTipoMantenimiento.map(tipoMantenimiento => (
                        <option key={tipoMantenimiento.id} value={tipoMantenimiento.value}>
                            {tipoMantenimiento.name}
                        </option>
                    ))}

                </select>
                <label htmlFor="trabajo-ubicacion">Ubicacion</label>
                <input
                    id="trabajo-ubicacion"
                    name="ubicacion"
                    onChange={(e) => setUbicacion(e.target.value)}
                    type="text"
                />
                <label htmlFor="trabajo-descripcion">Descripcion del mantenimiento</label>
                <input
                    id="trabajo-descripcion"
                    name="descripcion"
                    onChange={(e) => setDescripcion(e.target.value)}
                    type="text"
                />
                <label htmlFor="trabajo-telefono">Telefono</label>
                <input
                    id="trabajo-telefono"
                    name="telefono"
                    onChange={(e) => setTelefono(e.target.value)}
                    type="text"
                />

                <input type="submit" value="New Job" />

            </form>
        </div>
    )
}
>>>>>>> master
