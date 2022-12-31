import React from 'react'
import { useLocation } from 'react-router-dom'
import "./HomeMainbar.css"
import { useNavigate } from 'react-router-dom'
//import Questions from "./Questions"
import QuestionList from './QuestionList'

const HomeMainbar = () => {
    const location = useLocation()
    const user = 1;
    const navigate = useNavigate()
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
    
    // use use navigate when you want to redirect to 
    // diffrent webpage
    const checkAuth = () => {
        if(user === null){
            alert("login or signup")
            navigate('/Auth')
        }
        else{
            navigate("/AskQuestion")
        }
    }
  return (
    <div className='main-bar'>
        <div className="main-bar-header">
            {location.pathname === "/"? <h1>Top Questions</h1>:<h1>All Questions</h1>}

        </div>
        <button onClick= {checkAuth} className='ask-btn'>Ask Question</button>
        <div className="">
            {questionsList === null ?
            <h1>null</h1>:
            <>
            <p>{questionsList.length} questions</p>
            {/* <QuestionList questionsList={questionsList}/> */}
            </>
}
<QuestionList questions={questionsList} />

            
            
            
        </div>
    </div>
  )
}

export default HomeMainbar