import React from 'react'
import { Link, useParams } from 'react-router-dom'
import upVotes from "../../Assets/upvote.svg"
import downVotes from "../../Assets/downVote.svg"
import "./Questions.css"
import Avatar from '../../Avatar/Avatar'
// import DisplayAnswer from './DisplayAnswer'
function QuestionsDetails() {
    const { id } = useParams();
    var questionsList = [{ 
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "mano",
        userId: 1,
        askedOn: "jan 1",
        
    },{ 
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
        
    },{ 
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "mano",
        askedOn: "jan 1",
        userId: 1,
    }]
   
  return (
  
      
        <div className="question-details-page">
  {questionsList === null ? (
    <p>Loading...</p>
  ) : 
    <>
    
    {questionsList.filter(question => question.id === id).map(question => (
       
        <div key={question._id}>
          <section className="question-details-container">
            <h1>{question.questionTitle}</h1>
            <div className="question-details-container">
              <div className="question-votes">
                <img src={upVotes} alt="" width="18" />
                <p>{question.upVotes - question.downVotes}</p>
                <img src={downVotes} alt="" width="18" />
              </div>
              <div style={{ width: "100%" }}></div>
                      <p className='question-body'>{question.questionBody}</p>
            <div className="question-details-tags">
              {
                  question.questionTags.map((tag) =>
                  <p key = {tag}>{tag}</p>
                  )
              }
            </div>
            <div className="question-action-user">
              <div>
                  <button type='button'>Share</button>
                  <button type='button'>Delete</button>
              </div>
            </div>
            <div>
              <p>asked {question.askedOn}</p>
              <Link className='user-link' to =  {`/User/${question.userId}`} style={{color:"#0086d8"}}></Link>
              <Avatar backgroundColor="orange" px="8px" py="5px">{question.userPosted.charAt(0).toUpperCase}</Avatar>
            <div>
              {question.userPosted}
            </div>
            </div>
            </div>
          </section>
          {
              question.noOfAnswers !== 0 && (
                  <section>
                      <h3>
                          {question.noOfAnswers} answers
                      {/* <DisplayAnswer key = {question.id} question = {question}/> */}
                      </h3>
                  </section>
              )
          }
          <section className="post-ans-container">
              <h3> Your Answer</h3>
              <form>
                 <textarea  name = "" id="" cols="30" row="18"></textarea>
                 <input type="Submit" className="post-ans-btn" value = "Post Your Answer" />  
              </form>
              <p>
                  Browse other Questions tagged
                  {
                      question.questionTags.map((tag) => (
                      <Link to = "/Tags" key = {tag} className="ans-tags"></Link>

                      ))
                      } or <Link to = "/AskQuestion"></Link>
              </p>
          </section>
        </div>
            
      ))}

   
    </>
  }  
</div>

   
   
  )
}

export default QuestionsDetails