import React from 'react'

const Item = (item) => {

    let {id, name} = item.item;
  return (
    <div className="row mb-3" key={id}>
    <div className="card" >
            <p className="card-text"> <span className="fw-bold">Mascota: </span> {name}</p>
            <p className="card-text"> <span className="fw-bold">Edad: </span>  {name}</p>
            <p className="card-text"> <span className="fw-bold">Peso: </span>   {name}</p>
            <p className="card-text"> <span className="fw-bold">Propietario: </span>   {name}</p>
            <p className="card-text"> <span className="fw-bold">Telefono: </span>   {name}</p>
            <p className="card-text"> <span className="fw-bold">Dintomas: </span>   {name}</p>
            <p className="card-text"> <span className="fw-bold">Fecha de proximacita: </span>   {name}</p>
            <p className="card-text"> <span className="fw-bold">Hora: </span>   {name}</p>
            <div className="row mb-2">
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Item
