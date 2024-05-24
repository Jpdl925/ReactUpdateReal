import { useState } from 'react'

//Update the cart object items of id 1 to show a  quanity 2 with  a button click
const Cart = () => {

    const [cart, setCart] = useState({
       discount: .1,
       items: [
        {id: 1, title: 'Product 1', quantity: 1},
        {id: 2, title: 'Product 2', quantity: 1}
       ] 
    })

    const handleClick =() => {
       setCart({...cart, items: cart.items.map(item => item.id == 1 ? {...item, quantity: item.quantity + 1}: item)}); 
    }
  return (
    <div>
      {/* Title, show items, button to handle the update Update Cart  */}
      <h1>Item #{cart.items[0].id}, {cart.items[0].title}, Item Quantity:{cart.items[0].quantity}</h1>
      <h1>Item #{cart.items[1].id}, {cart.items[1].title}, Item Quantity:{cart.items[1].quantity}</h1>
      <button onClick={handleClick}>Add to Product 1</button>
    </div>
  )
}

export default Cart
