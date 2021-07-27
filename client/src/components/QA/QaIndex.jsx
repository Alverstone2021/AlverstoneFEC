import React from 'react';
import QaSearchBar from './QaSearchBar.jsx'
import QaQuestionsList from './QaQuestionsList.jsx'
import QaLoadAdd from './QaLoadAdd.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QaIndex = () => {
  const allQuestions = {
    "product_id": "19251",
    "results": [
        {
            "question_id": 125363,
            "question_body": "Nobis dignissimos iusto consequatur et.",
            "question_date": "2020-11-11T00:00:00.000Z",
            "asker_name": "Jana0",
            "question_helpfulness": 26,
            "reported": false,
            "answers": {
                "1185718": {
                    "id": 1185718,
                    "body": "Non culpa a rem.",
                    "date": "2020-10-21T00:00:00.000Z",
                    "answerer_name": "Jonathan18",
                    "helpfulness": 1,
                    "photos": [
                        "https://images.unsplash.com/photo-1550338300-f9a475b50ba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80"
                    ]
                },
                "1185720": {
                    "id": 1185720,
                    "body": "Beatae mollitia veniam ad voluptas consequuntur repellendus est tenetur.",
                    "date": "2020-12-02T00:00:00.000Z",
                    "answerer_name": "Levi_Bins",
                    "helpfulness": 3,
                    "photos": [
                        "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                        "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185721": {
                    "id": 1185721,
                    "body": "Nisi est dolores molestiae doloremque voluptas.",
                    "date": "2021-01-16T00:00:00.000Z",
                    "answerer_name": "Guiseppe_Kautzer",
                    "helpfulness": 15,
                    "photos": []
                }
            }
        },
        {
            "question_id": 125359,
            "question_body": "Quod corporis ducimus voluptatum veniam veniam inventore quaerat est nisi.",
            "question_date": "2020-09-24T00:00:00.000Z",
            "asker_name": "Vesta.Leffler",
            "question_helpfulness": 21,
            "reported": false,
            "answers": {
                "1185673": {
                    "id": 1185673,
                    "body": "Perferendis veniam laudantium voluptatem.",
                    "date": "2021-02-16T00:00:00.000Z",
                    "answerer_name": "Elna.Bednar8",
                    "helpfulness": 16,
                    "photos": [
                        "https://images.unsplash.com/photo-1470282312847-28b943046dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80",
                        "https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80"
                    ]
                }
            }
        },
        {
            "question_id": 125354,
            "question_body": "Tenetur cumque placeat.",
            "question_date": "2020-05-18T00:00:00.000Z",
            "asker_name": "Marques_Raynor",
            "question_helpfulness": 19,
            "reported": false,
            "answers": {
                "1185649": {
                    "id": 1185649,
                    "body": "Sit et reprehenderit.",
                    "date": "2021-02-03T00:00:00.000Z",
                    "answerer_name": "Kennedy.Balistreri27",
                    "helpfulness": 18,
                    "photos": []
                },
                "1185650": {
                    "id": 1185650,
                    "body": "Et iure reprehenderit distinctio.",
                    "date": "2020-07-11T00:00:00.000Z",
                    "answerer_name": "Odessa_Bergstrom",
                    "helpfulness": 5,
                    "photos": [
                        "https://images.unsplash.com/photo-1517278322228-3fe7a86cf6f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                    ]
                },
                "1185651": {
                    "id": 1185651,
                    "body": "Quo ut maiores vero molestias ea occaecati repudiandae.",
                    "date": "2020-04-12T00:00:00.000Z",
                    "answerer_name": "Hortense18",
                    "helpfulness": 4,
                    "photos": []
                },
                "1185652": {
                    "id": 1185652,
                    "body": "Quaerat incidunt qui laudantium fugiat maiores consequatur.",
                    "date": "2021-01-30T00:00:00.000Z",
                    "answerer_name": "Elwyn.Olson",
                    "helpfulness": 0,
                    "photos": [
                        "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
                    ]
                },
                "1185653": {
                    "id": 1185653,
                    "body": "Deserunt rerum non aliquam.",
                    "date": "2020-11-16T00:00:00.000Z",
                    "answerer_name": "Kamren_Nikolaus",
                    "helpfulness": 10,
                    "photos": [
                        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
                        "https://images.unsplash.com/photo-1561861422-a549073e547a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    ]
                },
                "1185654": {
                    "id": 1185654,
                    "body": "Quibusdam deserunt autem corporis inventore officiis expedita nisi maiores nemo.",
                    "date": "2020-05-03T00:00:00.000Z",
                    "answerer_name": "Kylie_Buckridge71",
                    "helpfulness": 6,
                    "photos": []
                },
                "1185656": {
                    "id": 1185656,
                    "body": "Itaque ipsum labore veritatis id excepturi fugit.",
                    "date": "2020-04-16T00:00:00.000Z",
                    "answerer_name": "Liana_Crona5",
                    "helpfulness": 4,
                    "photos": [
                        "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185657": {
                    "id": 1185657,
                    "body": "Fuga sunt pariatur dolores.",
                    "date": "2020-07-15T00:00:00.000Z",
                    "answerer_name": "Yesenia_Ullrich",
                    "helpfulness": 19,
                    "photos": [
                        "https://images.unsplash.com/photo-1515243061678-14fc18b93935?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185658": {
                    "id": 1185658,
                    "body": "Perferendis consectetur illum fugiat natus omnis illo.",
                    "date": "2021-01-02T00:00:00.000Z",
                    "answerer_name": "Laverna.Harris",
                    "helpfulness": 15,
                    "photos": [
                        "https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                }
            }
        },
        {
            "question_id": 125349,
            "question_body": "Et iusto delectus perferendis maxime suscipit earum quia.",
            "question_date": "2020-12-06T00:00:00.000Z",
            "asker_name": "Monty79",
            "question_helpfulness": 18,
            "reported": false,
            "answers": {
                "1185577": {
                    "id": 1185577,
                    "body": "Sed dolores veniam minima et.",
                    "date": "2020-07-26T00:00:00.000Z",
                    "answerer_name": "Roscoe_Sawayn",
                    "helpfulness": 12,
                    "photos": []
                },
                "1185578": {
                    "id": 1185578,
                    "body": "Omnis et reprehenderit veritatis.",
                    "date": "2020-11-02T00:00:00.000Z",
                    "answerer_name": "Ofelia_Bosco91",
                    "helpfulness": 4,
                    "photos": [
                        "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185580": {
                    "id": 1185580,
                    "body": "Magnam tempore temporibus ea omnis perferendis.",
                    "date": "2020-07-05T00:00:00.000Z",
                    "answerer_name": "Leatha_Beatty55",
                    "helpfulness": 7,
                    "photos": [
                        "https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185581": {
                    "id": 1185581,
                    "body": "Necessitatibus ab adipisci qui et.",
                    "date": "2020-03-31T00:00:00.000Z",
                    "answerer_name": "Eliza.Rohan",
                    "helpfulness": 15,
                    "photos": [
                        "https://images.unsplash.com/photo-1558014356-f7c41bc744f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185582": {
                    "id": 1185582,
                    "body": "Dignissimos consequuntur laborum sit.",
                    "date": "2020-09-01T00:00:00.000Z",
                    "answerer_name": "Cade81",
                    "helpfulness": 14,
                    "photos": []
                },
                "1185583": {
                    "id": 1185583,
                    "body": "Provident facilis harum veniam.",
                    "date": "2021-02-10T00:00:00.000Z",
                    "answerer_name": "Elbert.Maggio",
                    "helpfulness": 15,
                    "photos": [
                        "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80",
                        "https://images.unsplash.com/photo-1558682596-dea9bf84c219?ixlib=rb-1.2.1&auto=format&fit=crop&w=2098&q=80"
                    ]
                }
            }
        },
        {
            "question_id": 125360,
            "question_body": "In hic voluptas magnam qui.",
            "question_date": "2020-04-20T00:00:00.000Z",
            "asker_name": "Susana.Ratke72",
            "question_helpfulness": 17,
            "reported": false,
            "answers": {
                "1185674": {
                    "id": 1185674,
                    "body": "Est aut alias culpa qui aut veritatis veritatis sed similique.",
                    "date": "2020-06-01T00:00:00.000Z",
                    "answerer_name": "Mohammed89",
                    "helpfulness": 5,
                    "photos": []
                },
                "1185675": {
                    "id": 1185675,
                    "body": "Magni perspiciatis quae necessitatibus eveniet recusandae.",
                    "date": "2020-06-04T00:00:00.000Z",
                    "answerer_name": "Kim71",
                    "helpfulness": 5,
                    "photos": []
                },
                "1185676": {
                    "id": 1185676,
                    "body": "Et odio dignissimos labore quibusdam.",
                    "date": "2020-04-10T00:00:00.000Z",
                    "answerer_name": "Kylie.Parisian",
                    "helpfulness": 18,
                    "photos": [
                        "https://images.unsplash.com/photo-1562542132-8555e1b583f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80",
                        "https://images.unsplash.com/photo-1519689373023-dd07c7988603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    ]
                },
                "1185677": {
                    "id": 1185677,
                    "body": "Provident temporibus id iure omnis praesentium.",
                    "date": "2021-02-15T00:00:00.000Z",
                    "answerer_name": "Helga51",
                    "helpfulness": 4,
                    "photos": [
                        "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80",
                        "https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    ]
                },
                "1185678": {
                    "id": 1185678,
                    "body": "Odio exercitationem ratione.",
                    "date": "2020-06-25T00:00:00.000Z",
                    "answerer_name": "Natasha36",
                    "helpfulness": 7,
                    "photos": [
                        "https://images.unsplash.com/photo-1541444446610-749d3299b35e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185679": {
                    "id": 1185679,
                    "body": "Aut reiciendis numquam aut deserunt architecto ullam est ut.",
                    "date": "2020-12-18T00:00:00.000Z",
                    "answerer_name": "Ona.Wolf45",
                    "helpfulness": 17,
                    "photos": [
                        "https://images.unsplash.com/photo-1530073391204-7b34a1497281?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
                        "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185680": {
                    "id": 1185680,
                    "body": "Illum dolor deserunt.",
                    "date": "2020-12-08T00:00:00.000Z",
                    "answerer_name": "Maude6",
                    "helpfulness": 12,
                    "photos": [
                        "https://images.unsplash.com/photo-1510390099355-23e690d8129d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185681": {
                    "id": 1185681,
                    "body": "Recusandae tenetur voluptatem impedit velit minima.",
                    "date": "2020-07-10T00:00:00.000Z",
                    "answerer_name": "Mina.Schaefer",
                    "helpfulness": 1,
                    "photos": []
                },
                "1185682": {
                    "id": 1185682,
                    "body": "Deleniti iusto perspiciatis quod sunt aut harum corporis aut ipsum.",
                    "date": "2021-02-20T00:00:00.000Z",
                    "answerer_name": "Lavada_Abernathy",
                    "helpfulness": 3,
                    "photos": [
                        "https://images.unsplash.com/photo-1520904549193-5ab0027b3fa6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                    ]
                },
                "1185683": {
                    "id": 1185683,
                    "body": "Dolor quibusdam temporibus tempore.",
                    "date": "2020-10-09T00:00:00.000Z",
                    "answerer_name": "Velda.Roob57",
                    "helpfulness": 14,
                    "photos": [
                        "https://images.unsplash.com/photo-1562542096-218d8f9760bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=2057&q=80"
                    ]
                },
                "1185684": {
                    "id": 1185684,
                    "body": "In vitae quia cumque laudantium repellendus optio harum voluptatibus.",
                    "date": "2020-04-02T00:00:00.000Z",
                    "answerer_name": "Lindsey_Schiller8",
                    "helpfulness": 9,
                    "photos": [
                        "https://images.unsplash.com/photo-1529108750117-bcbad8bd25dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=662&q=80"
                    ]
                },
                "1185685": {
                    "id": 1185685,
                    "body": "Qui et qui facilis.",
                    "date": "2020-09-10T00:00:00.000Z",
                    "answerer_name": "Asa_Reilly72",
                    "helpfulness": 19,
                    "photos": []
                },
                "1185686": {
                    "id": 1185686,
                    "body": "Eos odit qui vel voluptatem.",
                    "date": "2020-05-28T00:00:00.000Z",
                    "answerer_name": "Antwan44",
                    "helpfulness": 19,
                    "photos": [
                        "https://images.unsplash.com/photo-1558191053-c03db2757e3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
                    ]
                },
                "1185687": {
                    "id": 1185687,
                    "body": "Aut odio autem assumenda aliquam.",
                    "date": "2021-01-15T00:00:00.000Z",
                    "answerer_name": "Alan33",
                    "helpfulness": 15,
                    "photos": []
                },
                "1185688": {
                    "id": 1185688,
                    "body": "Suscipit ab suscipit ipsum nostrum hic.",
                    "date": "2020-12-08T00:00:00.000Z",
                    "answerer_name": "Gideon.Barrows77",
                    "helpfulness": 18,
                    "photos": []
                },
                "1185689": {
                    "id": 1185689,
                    "body": "Qui inventore enim.",
                    "date": "2020-05-21T00:00:00.000Z",
                    "answerer_name": "Chaim_Schimmel",
                    "helpfulness": 13,
                    "photos": []
                }
            }
        }
    ]
}

  var temparr = [];
  for (var i = 0; i < 4; i++) {
      if (allQuestions.results[i] !== undefined) {
        temparr.push(allQuestions.results[i])
      }
  }

  const [qLimit, setQLimit] = useState(4)
  const [questions, setQuestions] = useState(temparr)

  const updateQuestions = () => {
    // setQuestions([])
    var temp = [];
    // console.log('going to loop', qLimit)
    for (var i = 0; i < qLimit + 2; i++) {
        if (allQuestions.results[i] !== undefined) {
          temp.push(allQuestions.results[i])
        }
    }
    setQuestions(temp)
  }

  const qLimitPlusTwo = () => {
      setQLimit(qLimit + 2)
      updateQuestions()
  }


//   useEffect() {
//       updateQuestions()
//   }


  return (
    <div>
      <h1 className='center'>***Start of QA***</h1>
      <h3>QUESTIONS & ANSWERS</h3>
      <QaSearchBar />
      <QaQuestionsList allQuestions={allQuestions} qLimit={qLimit} questions={questions}/>
      <QaLoadAdd qLimitPlusTwo={qLimitPlusTwo}/>
      <div>num of Q's to show is {qLimit}</div>
      <h1 className='center'>***End of QA***</h1>
    </div>
  )
}

export default QaIndex;