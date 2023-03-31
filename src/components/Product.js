import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product(props) {
  const { product, onAdd,onRemove } = props;
  
  return (
    
        <div  class="card " style={{maxWidth:'30%',padding:'2%'}} >
              <img style={{ maxWidth:'40%',maxHeight:'40%', marginLeft:'auto', marginRight:'auto'}} src={product.image} className="card-img-top small"  alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text" style={{textAlign:'justify'}}>{product.description}</p>
                <p class="card-text h5">Php {product.price}</p>
                
                <a class="btn btn-primary" onClick={() => onRemove(product)} style={{marginRight:'2%'}}>-</a>
                <input type="text" value={product.qty} readOnly='true' style={{width:'3%'}} />
                <a style={{marginLeft:'2%'}}  class="btn btn-primary" onClick={() => onAdd(product)}>+</a>
              </div>
        </div>
      
    
  );
}