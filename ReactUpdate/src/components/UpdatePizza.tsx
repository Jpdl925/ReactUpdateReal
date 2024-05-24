import React, { useState } from 'react'


//Here you want a button so when the user clicks the button it adds 'Cheese' to the toppoings
const UpdatePizza = () => {

    const [pizza, setPizza] = useState({
        name: 'King Aurthor Supreme',
        toppings: ['Mushroom,','Onions,']
    });


    const listToppings = pizza.toppings.map((topping) => 
      <li>{topping}</li> 
  );

    const handleClick = () => {
      pizza.toppings.includes('Cheese') ? console.log('Cheese already added') : setPizza({...pizza, toppings: [...pizza.toppings, 'Cheese']});


        
    }
  return (
    <div>
      <h1>{pizza.name}</h1>
      <h2>{listToppings}</h2>
      <button onClick={handleClick}>Add Cheese</button>
    </div>
  )
}

export default UpdatePizza
