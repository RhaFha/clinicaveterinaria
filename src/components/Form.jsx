import React from 'react'
import { useState } from 'react';

const Form = ({addItem}) => {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [owner, setOwner] = useState('');
    const [phone, setPhone] = useState('');
    const [symptoms, setSymptoms] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const onSubmitItem = (e) => {
        //Cancelar envio
        e.preventDefault();

        //Validar datos
        if(!name) {
            alert('Por favor, agregue el nombre')
            return
        }
        if(!age) {
            alert('Por favor, agregue la edad')
            return
        }
        if(!weight) {
            alert('Por favor, agregue el peso')
            return
        }
        if(!symptoms) {
            alert('Por favor, agregue los sintomas')
            return
        }
        if(!date) {
            alert('Por favor, agregue la fecha')
            return
        }
        if(!time) {
            alert('Por favor, agregue la hora')
            return
        }

        //Ejecutar funcion AddItem
        addItem({name, age, weight, owner, phone, symptoms, date, time});

        //Limpiar formulario
        setName('');
        setAge('');
        setWeight('');
        setOwner('');
        setPhone('');
        setSymptoms('');
        setDate('');
        setTime('');
    }

  return (
      <div className="col-sm-10">
    <div className="card bg-form-dark">
        <div className="card-header">
            <h2 className="text-muted">Crear Cita</h2>
        </div>
        <div className="card-body">
            <form className="" onSubmit={onSubmitItem}>
                <div className='form-group'>
                    <label>Mascota:</label>
                    <input
                        type='text'
                        placeholder='Ingresa el nombre de la mascota'
                        className="form-control"
                        value={name}
                        onChange={ (e => setName(e.target.value))}
                    />
                </div>
                <div className='form-group'>
                    <label>Edad:</label>
                    <input
                        type='text'
                        placeholder='Ingresa la edad'
                        className="form-control"
                        value={age}
                        onChange={ (e => setAge(e.target.value))}
                    />
                </div>
                <div className='form-group'>
                    <label>Peso:</label>
                    <input
                        type='text'
                        placeholder='Ingresa el peso'
                        className="form-control"
                        value={weight}
                        onChange={ (e => setWeight(e.target.value))}
                    />
                </div>
                <div className='form-group'>
                    <label>Nombre del dueño:</label>
                    <input
                        type='text'
                        placeholder='Ingresa el nombre del dueño'
                        className="form-control"
                        value={owner}
                        onChange={ (e => setOwner(e.target.value))}
                    />
                </div>
                <div className='form-group'>
                    <label>Telefono:</label>
                    <input
                        type='text'
                        placeholder='Ingresa el numero de telefono'
                        className="form-control"
                        value={phone}
                        onChange={ (e => setPhone(e.target.value))}
                    />
                </div>
                <div className='form-group'>
                    <label>Sintomas:</label>
                    <input
                        type='text'
                        placeholder='Ingresa los sintomas'
                        className="form-control"
                        value={symptoms}
                        onChange={ (e => setSymptoms(e.target.value))}
                    />
                </div>
                <div className='form-group'>
                    <label>Feche de proxima cita:</label>
                    <input
                        type='date'
                        placeholder='Ingresa la fecha'
                        className="form-control"
                        value={date}
                        onChange={ (e => setDate(e.target.value))}
                    />
                </div>
                <div className='form-group mb-3'>
                    <label>Hora:</label>
                    <input
                        type='time'
                        placeholder='Ingresa la hora'
                        className="form-control"
                        value={time}
                        onChange={ (e => setTime(e.target.value))}
                    />
                </div>
                
                <div className="form-group d-grid gap-2">
                    <input
                        type="submit"
                        className="btn btn-primary btn-add-item"
                        value="Añadir cita"
                    />
                </div>
            </form>
        </div>
    </div>
</div>
  )
}

export default Form;
