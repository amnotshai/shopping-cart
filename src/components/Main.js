import React from 'react';
import Product from './Product';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

export default function Main(props) {
  const {products, onAdd,onRemove, cartItems } = props;

  const [searchTerm, setSearchTerm]=useState("");
 
  
  return (
    <main className="block container-xl col-au" >
      <h2>Products</h2>
      <form class="d-flex" role="search" style={{width:'40%', marginBottom:'2%'}}>
        
        <input id='searchInput' class="form-control me-2" type="search" placeholder="Search" onChange={(event)=>{
          setSearchTerm(event.target.value);
        }} aria-label="Search"/>
        
      </form>
      <div class="container-fluid ">
        <div class="row ">
          <div class="col-10" style={{display:'flex',flexWrap:'wrap'}}>
            {
              products.filter((val)=> {
                if(searchTerm ===""){
                  return val;
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((product)=>{
                return(
                  <Product onRemove={onRemove} key={product.id} item={cartItems.find((x)=>x.id===product.id)} product={product} onAdd={onAdd}></Product>
                )
              })
            }
            
          </div>

        </div>

      </div>
      
      
    </main>
  );
}