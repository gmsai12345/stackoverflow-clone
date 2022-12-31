import React from 'react'
import "./AskQuestion.css"


const AskQuestion = () => {
    

  return (
    
    
    <div className='ask-question'>
        <br/>
        <br/>
        <br/>
       <div className="ask-ques-container">
        <h1>Ask a public Question</h1>
        <form>
            <div className="ask-form-container">
               <label htmlFor="ask-ques-title" className="ask-ques-title">
                <h4>Title</h4>
                <p>Be specific and imagining you're asking a question to 
                    another person.
                </p>
                <input type="text" className='questionTitle' id='ask-ques-title'/>

                </label> 
                <label htmlFor="ask-ques-title" className="ask-ques-title">
                <h4>Body</h4>
                <p>Include all the information someone would need
                    to answer your question 
                </p>
                <input type="text" className='questionTitle' id='ask-ques-title'/>

                </label> 
                <label htmlFor="ask-ques-title" className="ask-ques-title">
                <h4>Tags</h4>
                <p>Add upto 5 tags to describe what your 
                    question is about
                </p>
                <input type="text" className='questionTitle' id='ask-ques-title'/>

                </label> 
            </div>
            <input type="submit" className='review-btn' value="review your question"/>
        </form>
       </div>
        </div>
  )
}

export default AskQuestion