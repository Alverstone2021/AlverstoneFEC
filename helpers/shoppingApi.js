import axios from 'axios';
import token from '../config.js';

const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/';

// Retrieves the first five products from the API
const getAllProducts = function () {
  var config = {
    method: 'get',
    url: `${baseUrl}products/`,
    headers: {
      'Authorization': token,
    }
  }

  return axios(config);
}

const getQandA = function (productId) {
  var config = {
    method: 'get',
    url: `${baseUrl}qa/questions/?product_id=${productId}&count=10000`,
    headers: {
      'Authorization': token,
    }
  }
  // Return call for QA
  return axios(config);
}

const getRatings = function (productId) {
  var config = {
    method: 'get',
    url: `${baseUrl}reviews/?product_id=${productId}&count=1000`,
    headers: {
      'Authorization': token,
    }
  }
  // Return call for ratings
  return axios(config);
}

const getMetaData = function (productId) {
  var config = {
    method: 'get',
    url: `${baseUrl}reviews/meta?product_id=${productId}`,
    headers: {
      'Authorization': token,
    }
  }
  // Return call for metaData
  return axios(config);
}

const getStyles = function (productId) {
  var config = {
    method: 'get',
    url: `${baseUrl}products/${productId}/styles`,
    headers: {
      'Authorization': token,
    }
  }
  return axios(config);
}

const getFeatures = function (productId) {
  var config = {
    method: 'get',
    url: `${baseUrl}products/${productId}`,
    headers: {
      'Authorization': token,
    }
  }
  return axios(config);
}

const getRelatedProducts = function (productId) {
  var config = {
    method: 'get',
    url: `${baseUrl}products/${productId}/related`,
    headers: {
      'Authorization': token,
    }
  }
  return axios(config)
}


const addToCart = function (skus, size) {
  // console.log('skus', skus)
  // console.log('size', size)
  let sku_id;

  for (const [key, value] of Object.entries(skus)) {
    if (value.size === size) {
      sku_id = key;
    }
  }

  var config = {
    method: 'post',
    url: `${baseUrl}cart/`,
    headers: {
      'Authorization': token,
    },
    data: {
      sku_id: sku_id
    }
  }
  return axios(config);
}

const postNewQuestion = function(data) {
  var config = {
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/',
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    data: data
  }
  return axios(config)
}


const apiCalls = {
  getAllProducts: getAllProducts,
  getQandA: getQandA,
  getRatings: getRatings,
  getStyles: getStyles,
  getFeatures: getFeatures,
  getRelatedProducts: getRelatedProducts,
  getMetaData: getMetaData,
  addToCart: addToCart,
  postNewQuestion: postNewQuestion,
};

export default apiCalls;