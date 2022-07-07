import React, { Component } from 'react';
import{Route,Routes}  from 'react-router-dom'; 
//import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar"
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Cart from "./component/Cart/Cart";
import Default from "./component/Default";
import Modal from "./component/Modal";
class App extends Component { 
  render() {
    return (
    <>
     <Navbar />
     <Routes>
      <Route  exact path="/" element={<ProductList/>} /> 
      <Route  exact path="/details" element={<Details/>} />
      <Route  exact path="/cart" element={<Cart/>} />
      <Route path="*"   element={<Default/>}/>
     </Routes>
     <Modal/>
    </>
    );
  }
}
export default App;
