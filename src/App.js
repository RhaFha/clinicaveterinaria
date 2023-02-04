import { useState } from "react";

import Header from "./components/Header";
import Items from "./components/Items";

function App() {

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
},
{
  id: 3,
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

  return (
    <div className="container-fluid mt-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <Header />
        </div>
        <div className="col-12 col-md-5 g-1">
          <div className="row mb-3">
                  <h1>LISTA DE CITAS</h1>
            </div>
          <Items 
            items={items}
          />
        </div> 
      </div>
    </div>
  );
}

export default App;
