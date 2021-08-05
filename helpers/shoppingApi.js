import axios from 'axios';
import token from '../config.js';

const baseUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';

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
    url: `${baseUrl}qa/questions/?product_id=${productId}`,
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

const apiCalls = {
  getAllProducts: getAllProducts,
  getQandA: getQandA,
  getRatings: getRatings,
  getStyles: getStyles,
  getFeatures: getFeatures,
  getRelatedProducts: getRelatedProducts,
  getMetaData: getMetaData
};

export default apiCalls;