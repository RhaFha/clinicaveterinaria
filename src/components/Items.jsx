import React from 'react';

import Item from './Item';

const Items = ({items}) => {
    let display;

    if(items){
        display = items.map((x) => {

          return (
            <>
             <Item item={x} key={x.id}/>
            </>
           
          );
        });
      }else{
        display = "No hay citas registradas";
      }


      return <>{display}</>
  
}

export default Items;
