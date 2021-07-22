import React from 'react';
import Overview from './components/Overview/overviewIndex.jsx'
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx'
import QA from './components/QA/QaIndex.jsx'
import Ratings from './components/Ratings/RatingsIndex.jsx'
import axios from 'axios'
import token from '../../config.js'
import {useEffect, useState} from 'react'

const App = () => {

  const [currentProduct, setCurrentProduct] = useState('')
  const [allProducts, setAllProducts] = useState('')

  useEffect(() => {

    var config = {
      method: 'get',
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/',
      headers: {
        'Authorization': token,
      }
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data[0]));
      setCurrentProduct(response.data[0])
      setAllProducts(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [])

  return (
    <div>
      THE MASTER APP
      <Overview currentProduct={currentProduct}/>
      <RelatedProducts setAllProducts={setAllProducts} currentProduct={currentProduct}/>
      <QA currentProduct={currentProduct}/>
      <Ratings currentProduct={currentProduct}/>
    </div>
  );
};

export default App;