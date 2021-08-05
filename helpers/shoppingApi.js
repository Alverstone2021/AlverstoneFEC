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
    url: `${baseUrl}/qa/questions/`,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    data: data
  }
  return axios(config)
}

const postNewAnswer = function(data, question_id) {
  var config = {
    method: 'post',
    url: `${baseUrl}qa/questions/${question_id}/answers`,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    },
    data: data
  }
  return axios(config)
}

const questionHelpful = function(question_id) {
  var config = {
    method: 'put',
    url: `${baseUrl}qa/questions/${question_id}/helpful`,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  }
  return axios(config)
}

const answerHelpful = function(answer_id) {
  var config = {
    method: 'put',
    url: `${baseUrl}qa/answers/${answer_id}/helpful`,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  }
  return axios(config)
}

const answerReport = function(answer_id) {
  var config = {
    method: 'put',
    url: `${baseUrl}qa/answers/${answer_id}/report`,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  }
  return axios(config)
}

const questionReport = function(question_id) {
  var config = {
    method: 'put',
    url: `${baseUrl}qa/questions/${question_id}/report`,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
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
  getMetaData: getMetaData,
  addToCart: addToCart,
  postNewQuestion: postNewQuestion,
  postNewAnswer: postNewAnswer,
  questionHelpful: questionHelpful,
  answerHelpful: answerHelpful,
  answerReport: answerReport,
  questionReport: questionReport,
};

export default apiCalls;