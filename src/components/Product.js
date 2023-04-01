import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Product(props) {
  const {  onAdd,onRemove, item ,product} = props;
  
  return (
    
        <div  class="card " style={{maxWidth:'30%',padding:'2%'}} >
              <img style={{ maxWidth:'40%',maxHeight:'40%', marginLeft:'auto', marginRight:'auto'}} src={product.image} className="card-img-top small"  alt="..."></img>
              <div class="card-body">
                <h5 class="card-title">{product.title}</h5>
                <p class="card-text" style={{textAlign:'justify'}}>{product.description}</p>
                <p class="card-text h5">Php {product.price}</p>
                <div>
                  {item? (<div>
                    <a class="btn btn-primary" onClick={() => onRemove(item)} style={{marginRight:'2%'}}>-</a>
                    <input type="text" value={item.qty}  style={{width:'5%'}} />
                    <a style={{marginLeft:'2%'}}  class="btn btn-primary" onClick={() => onAdd(item)}>+</a>

                  </div>):(
                    <a style={{marginLeft:'2%'}}  class="btn btn-primary" onClick={() => onAdd(product)}>Add To Cart</a>
                  )}
                </div>
                
                
              </div>
        </div>
      
    
  );
}