import React from 'react';
import Product from './Product';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Main(props) {
  const {products, onAdd,onRemove } = props;

  return (
    <main className="block container-xl col-au" >
      <h2>Products</h2>
      <div class="container-fluid">
        <div class="row ">
          <div class="col-10" style={{display:'flex',flexWrap:'wrap'}}>
            {products.map((product) => (
              <Product onRemove={onRemove} key={product.id} product={product} onAdd={onAdd}></Product>
            ))}
          </div>

        </div>

      </div>
      
      
    </main>
  );
}