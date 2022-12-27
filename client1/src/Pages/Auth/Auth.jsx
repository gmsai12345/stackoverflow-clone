import React from 'react'
import { useState } from 'react'
import icon from "../../Assets/icon.png"
import AboutAuth from './AboutAuth'
import "./Auth.css"

const Auth = () => {
    const [isSignup, setisSignup] = useState(false);
    const handleSwitch = () => {
        setisSignup(!isSignup)

    }
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            {isSignup && (<AboutAuth/>)}
            {/* we can also import the function as like this by importing it and then doing it  */}

            <section className='auth-section'>
                <div className='auth-container-2'>
                    {!isSignup && <img src={icon} className="login-logo" alt="as" />}
                    {/* if is sign up variable is false then it will display image */}
                    <form>
                        {isSignup && (<label htmlFor='name'>
                            <h4>Display Name</h4>
                            <input type= "text" id='name' name='name'>

                            </input>
                        </label>)}
                        <label htmlFor='email'>
                            <h4>Email</h4>
                            <input type="email" name='name' id='email' />

                        </label>
                        <label htmlFor='password'>
                            <div>
                                <h4>password</h4>
                                <input type="password" name='password' id='password' />
                                {isSignup && <p style={{ color: "#007ac6", fontSize:'13px'}}>forgot password?</p>}

                                <br />
                                <br />
                                { isSignup && <p>Passwords must contain atleast 8 <br/>
                                    character, including at least 1 letter and 1 
                                    <br/>
                                    number.
                                </p> }
                                <button type='submit' className='auth-btn'>{isSignup ? "Signup" : "Log in"}</button>
                                {/* really important for in between condition rendering so that paste what you want */}
                                {/* if signup = true paste signup else log in*/}

                            </div>


                        </label>
                        {isSignup && (
                            <label htmlFor='check'>
                                <input type="checkbox" id = "check"/>
                                <p style={{ fontSize:"13px"}}>Opt-in to recieve occasional, product updates, user research invitations, company announcements, and digests</p>

                            </label>
                        )}
                    </form>
                    <p> {isSignup ? "aldready have an account" : "don't have an account" } </p>
                    <button type = "button" className='handle-switch-btn' onClick={handleSwitch}>{isSignup ? "login" : "sign up"}</button>
                {isSignup && (
                    <p>
                      <span style={{ color: "#666767", fontSize:"13px"}}>  By clicking "Sign up", you agree to our </span><span style={{ color: "#007ac6"}}>terms and condition</span>,<span style={{ color: "#007ac6"}}> privacy policy </span> and <span style={{ color: "#007ac6"}}s>cookie policy</span>
                    </p>
                )}
                </div>
            </section>
        </div>
    )
}

export default Auth