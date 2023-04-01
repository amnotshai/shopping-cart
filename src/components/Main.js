import React from 'react';
import Product from './Product';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main(props) {
  const {products, onAdd,onRemove, cartItems } = props;

  return (
    <main className="block container-xl col-au" >
      <h2>Products</h2>
      <form class="d-flex" role="search" style={{width:'20%', marginBottom:'2%'}}>
            <input class="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="container-fluid">
        <div class="row ">
          <div class="col-10" style={{display:'flex',flexWrap:'wrap'}}>
            {products.map((product) => (
              <Product onRemove={onRemove} key={product.id} item={cartItems.find((x)=>x.id===product.id)} product={product} onAdd={onAdd}></Product>
            ))}
          </div>

        </div>

      </div>
      
      
    </main>
  );
}