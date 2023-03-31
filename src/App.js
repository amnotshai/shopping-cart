import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts'

function App() {
  
  const [products, setProds]= useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [Carts, setCheckout]=useLocalStorage('purchase',JSON.stringify(cartItems));
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(value =>setProds(value))
  }, [])

  const saveCheckout =(cartItem)=>{
      setCheckout();
  }

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1} : x

        )

      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Header  countCartItems={cartItems.length}></Header>
      <div class="container-fluid">
        <div className="row" style={{width:'100%'}}>
          
          <Main onRemove={onRemove}  products={products} onAdd={onAdd}></Main>

          
          
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
            saveCheckout={saveCheckout}
          ></Basket>
        </div>

      </div>
      
    </div>
  );
}

export default App;

