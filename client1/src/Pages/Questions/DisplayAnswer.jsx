import React from 'react'
//import QuestionsDetails from './QuestionsDetails'
import { Link } from 'react-router-dom'
import Avatar from '../../Avatar/Avatar'
import "./Questions.css"
const DisplayAnswer = ({question}) => {
  return (
    <div>
      {
        question.answer.map((ans) => (
          <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
           <div className="question-action-user">
            <button type='button'>Share</button>
            <button type='button'>Delete</button>
            <div className="">
              <p>
                answered on {ans.answeredOn}
                <Link className='user-link' to =  {`/User/${question.userId}`} style={{color:"#0086d8"}}></Link>
                <Avatar backgroundColor="orange" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase}</Avatar>
              <div>
                {ans.userAnswered}
              </div>
              </p>
            </div>
           </div>

          </div>
        ))
      }
    </div>
  )
}



export default DisplayAnswer