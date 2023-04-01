import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocalStorage } from 'usehooks-ts'

export default function Basket(props) {
  const { cartItems, onAdd, onRemove, saveCheckout } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  
  const totalPrice = itemsPrice;
  
  
 

  

  
  return (
    <aside className="block col-2">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <a class="btn  col-1 bi bi-x-circle" onClick={() => onRemove(item)} style={{marginRight:'2%'}}></a>
            
            <div className="col-5">{item.title}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-3 text-right">
              {item.qty} x Php{item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-3">Items Price</div>
              <div className="col-2 text-right">Php{itemsPrice.toFixed(2)}</div>
            </div>
            

            <div className="row">
              <div className="col-3">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Php{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={()=>saveCheckout(cartItems)}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
