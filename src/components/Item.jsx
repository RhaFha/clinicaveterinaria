import React from 'react'

const Item = ({item, deleteItem}) => {

    let {id, name, age, weight, owner, phone, symptoms, date, time} = item;
  return (
    <div className="row mb-3">
    <div className="card" >
            <p className="card-text"> <span className="fw-bold">Mascota: </span> {name}</p>
            <p className="card-text"> <span className="fw-bold">Edad: </span>  {age}</p>
            <p className="card-text"> <span className="fw-bold">Peso: </span>   {weight}</p>
            <p className="card-text"> <span className="fw-bold">Propietario: </span>   {owner}</p>
            <p className="card-text"> <span className="fw-bold">Telefono: </span>   {phone}</p>
            <p className="card-text"> <span className="fw-bold">Dintomas: </span>   {symptoms}</p>
            <p className="card-text"> <span className="fw-bold">Fecha de proximacita: </span>   {date}</p>
            <p className="card-text"> <span className="fw-bold">Hora: </span>   {time}</p>
            <div className="row mb-2">
                <div className="d-grid gap-2">
                    <button 
                        className="btn btn-primary" 
                        type="button"
                        onClick={() => deleteItem(id)}
                    >Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Item
