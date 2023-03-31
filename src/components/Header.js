import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Header(props) {
  return (
    <header className="block row center mb-5">
        <nav style={{marginBottom:'10%', height:'5%'}} class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><h4>Shopping App</h4></a>
          <button class="navbar-toggler bi bi-cart" style={{marginRight:'0.5%'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="position-absolute top-10 translate-middle badge rounded-pill bg-danger">{props.countCartItems}</span>
          </button>
          
        </div>
      </nav>
      
    </header>
  );
}