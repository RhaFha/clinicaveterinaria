import { useState } from "react";

import Header from "./components/Header";
import Items from "./components/Items";
import Form from "./components/Form";

function App() {

  const [id, setId] = useState(2)
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Mascota 1',
      age: 10,
      weight: 2,
      owner: 'Rafael Cerino Frias',
      phone: '9932472145',
      symptoms: 'asdasdasda',
      date: '2014-08-21',
      time: '10:41'
  },
  {
    id: 2,
    name: 'Mascota 1',
    age: 10,
    weight: 2,
    owner: 'Rafael Cerino Frias',
    phone: '9932472145',
    symptoms: 'asdasdasda',
    date: '2014-08-21',
    time: '10:41'
}
]);

  const addItem = (item) => {
    setId(id+1);
    const newItem = {id:id+1, ...item};
    setItems([...items, newItem]);console.log(newItem);
  }

  const deleteItem = (id) => {
    setItems( items.filter( (item) => item.id !== id) );
    
  }

  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <Form addItem={addItem}/>
        </div>
        <div className="col-12 col-md-5 g-1">
          <div className="row mb-3">
                  <h1>LISTA DE CITAS</h1>
            </div>
          <Items 
            items={items}
            deleteItem={deleteItem}
          />
        </div> 
      </div>
    </div>
  );
}

export default App;
