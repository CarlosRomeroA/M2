import React, { useState } from 'react';

function validate (input) {
  let error = {}
  if(!input.username){
    error.username = 'Username is requiere'
  } else if(!/\S+@\S+\.\S+/.test(input.username)) {
    error.username = 'Usuario incorrecto'
  } 
  
  if(!input.password) {
    error.password = 'password is require'
  } else if(!/(?=.*[0-9])/.test(input.password)) {
    error.password = 'password incorrecto'
  }
  return error
}


export default function  Form() {

  const initialState = {
    username: '',
    password: ''
  }

  let [input, setInput] = useState(initialState);
  let [error, setError] = useState({})

  let handleOnChange = (e) => {
    setInput(prevState => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  }

let handleOnBlur = (e) => {
  let objError = validate({...input, [e.target.name]: e.target.value})
  setError(objError)
}  

let handleOnSubmit = (e) => {
  e.preventDefault();
  setError(validate({...input, [e.target.name]: e.target.value}))
  setInput(initialState)
}

  return (
      <form>
        <h2> Test Form </h2>
        <div>
        <label> Username: </label>
        <input
          type='text'
          name='username'
          value={input.username}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className={error.username && 'danger'} 
          />
        </div>
        <p style={{visibility: error.username? 'visible' : 'hidden'}}>{error.username}</p>
        <div>
        <label> Password: </label>
        <input 
          type='password'
          name='password'
          value={input.password}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          className={error.password && 'danger'}
        />
        </div>
        <p style={{visibility: error.password? 'visible' : 'hidden'}}>{error.password}</p>
        <button disabled={!input.username || Object.keys(error).length > 0} onSubmit={handleOnSubmit}> Submit </button>
      </form>  
  )
}
