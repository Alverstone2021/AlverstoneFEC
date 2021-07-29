import React from 'react';
import Overview from './components/Overview/overviewIndex.jsx'
import RelatedProducts from './components/RelatedProducts/RelatedProducts.jsx'
import QA from './components/QA/QaIndex.jsx'
import Ratings from './components/Ratings/RatingsIndex.jsx'
// import axios from 'axios'
// import token from '../../config.js'
import apiCalls from '../../helpers/shoppingApi.js';

import { useEffect, useState } from 'react'

const App = () => {

  const [currentProduct, setCurrentProduct] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allRatings, setAllRatings] = useState([]);
  const [relatedProductIds, setRelatedProductIds] = useState([]);

  // On mounting get all our data
  useEffect(() => {

    apiCalls.getAllProducts()
      .then((products) => {
        // console.log('All products: ', products);
        setCurrentProduct(products.data[0]);
        setAllProducts(products.data);
        // Get Q and A after initail products
        apiCalls.getQandA(products.data[0].id)
          .then((questions) => {
            // console.log('Questions: ', questions.data.results);
            setAllQuestions(questions.data.results);
          })
          .catch((error) => {
            console.log('Error fetching questions: ', error);
          });
        // get reviews
        apiCalls.getRatings(products.data[0].id)
          .then((ratings) => {
            // console.log('Reviews: ', ratings.data.results);
            setAllRatings(ratings.data.results);
          })
          .catch((error) => {
            console.log('Error fetching reviews: ', error);
          })
        apiCalls.getRelatedProducts(products.data[0].id)
          .then((RPIds) => {
            setRelatedProductIds(RPIds.data)
          })
      })
      .catch((error) => {
        console.log('Error fetching all products');
      });
  }, []);

  return (
    <div className="hi">
      THE MASTER APP
      <Overview currentProduct={currentProduct} />
      <RelatedProducts setAllProducts={setAllProducts} currentProduct={currentProduct} relatedProductIds={relatedProductIds} />
      <QA currentProduct={currentProduct} allQuestions={allQuestions} />
      <Ratings currentProduct={currentProduct} allRatings={allRatings} />
    </div>
  );
};

export default App;