import React from 'react';

import Item from './Item';

const Items = ({items, deleteItem}) => {

    let display;

    if(items){
        display = items.map((x) => {
            let {id} = x
          return (
            <>
             <Item item={x} deleteItem={deleteItem} key={id}/>
            </>
           
          );
        });
      }else{
        display = "No hay citas registradas";
      }


      return <>{display}</>
  
}

export default Items;
