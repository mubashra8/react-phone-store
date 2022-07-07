import React, { Component } from 'react';
import Product from './Product'
import Title from './Title';
import { ProductConsumer } from './Context';
import { storeProducts } from '../data';
export default class ProductList extends Component {
 state={
  products:storeProducts
 }
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our Products"  />

            <div className="row">
              <ProductConsumer>
                {
                (value) => {
                 return value.products.map(product => {
                    return <Product key={product.id} product={product} />;
                  });
                }
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      
      </>
      )
    }
  }
