import React from 'react';
import QaSearchBar from './QaSearchBar.jsx'
import QaQuestionsList from './QaQuestionsList.jsx'
import QaLoadAdd from './QaLoadAdd.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QaIndex = (props) => {
  console.log('qaindex props', props.currentProduct.id)

  const [currentProductQAs, setCurrentProductQAs] = useState('')

  // useEffect(() => {

  //   setCurrentProductQAs(props.currentProduct.id)
  //   console.log('ID: ', currentProductQAs)

  //   var config = {
  //     method: 'get',
  //     // url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=${currentProductQAs}`,
  //     url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/?product_id=19089',
  //     headers: {
  //       'Authorization': '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',
  //     }
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });

  // }, [])

  return (
    <div>
      <h3>***Start of QA***</h3>
      <QaSearchBar />
      <QaQuestionsList />
      <QaLoadAdd />
      <h3>***End of QA***</h3>
    </div>
  )
}

export default QaIndex;