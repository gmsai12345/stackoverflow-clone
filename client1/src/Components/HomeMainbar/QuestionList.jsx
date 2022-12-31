import React from 'react';
import {Link} from "react-router-dom"
import "./HomeMainbar.css"

function QuestionList(props) {
  const { questions } = props;
  return (
    <div>
      {questions.map(question => (
        <div className='display-ans-container'>
        <div key={question._id}>
          <h3><Link to = {`/Questions/${question._id}`} className="question-title-link">{question.questionTitle}
          </Link>
          </h3>
          <p>{question.questionBody}</p>
          <ul className='display-tags'>
            {question.questionTags.map(tag => (
              <li key={tag} className='display-tags'>{tag}</li>
            ))}
          </ul>
          <p className='display-time'>Asked by {question.userPosted} on {question.askedOn}</p>
          <p className='display-votes-ans'>Upvotes: {question.upVotes} Downvotes: {question.downVotes}</p>
          <p>Number of answers: {question.noOfAnswers}</p>
        </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionList;
