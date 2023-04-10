import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { ImCross } from 'react-icons/im'
import { Link } from 'react-router-dom'
import {
  fillEmail,
  forgotPassword,
  killForgotPasswordAlert,
} from '../slices/authSlice'

const ForgotPassword = () => {
  const { email, forgotPasswordError, errorMessage, forgotPasswordLoad } =
    useSelector((store) => store.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (forgotPasswordError) {
      const timer = setTimeout(() => {
        dispatch(killForgotPasswordAlert())
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [forgotPasswordError])

  return (
    <Wrapper>
      <h2>Reset Password</h2>
      <p>Enter an email associated with this account to reset your password</p>
      {forgotPasswordError && (
        <div className='alert-container'>
          <p className='alert-texts'>{errorMessage}</p>
          <div className='exit-btn'>
            <ImCross />
          </div>
        </div>
      )}
      <form>
        <input
          type='email'
          value={email}
          onChange={(e) => {
            dispatch(fillEmail(e.target.value))
          }}
        />
      </form>
      <button
        type='button'
        className={forgotPasswordLoad ? 'loading-btn' : ''}
        onClick={() => {
          dispatch(forgotPassword({ email }))
        }}
      >
        Send OTP
      </button>
      <Link to='/login'>
        <p className='login'>Back to login</p>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--login-page);

  h2 {
    font-size: 2em;
  }

  p {
    margin: 1rem;
    text-align: center;
    width: 80%;
  }

  .alert-container {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    color: #b94a48;
    background-color: #f2dede;
    border-color: #eed3d7;
    padding: 1rem;
  }

  .alert-texts {
    font-size: 0.9em;
    width: 90%;
  }

  .exit-btn {
    font-size: 0.7em;
    height: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
  }

  form {
    width: 90%;
  }

  input {
    width: 100%;
    height: 55px;
    margin-top: 0.7rem;
    padding-left: 2.5rem;
    border-radius: 20px;
    border: solid 1.5px #6b6b6b;
    padding-right: 4rem;
    font-size: 1.1em;
    background: var(--input-bg);
    outline: none;
  }

  button {
    margin-top: 4rem;
    height: 50px;
    width: 90%;
    border: none;
    background: var(--login-secondary);
    color: var(--white-col);
    font-size: 0.9em;
    text-align: center;
    border-radius: 10px;
    cursor: pointer;
    font-size: 1.2em;
  }

  .loading-btn {
    opacity: 0.75;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  .login {
    font-size: 0.8em;
    font-weight: 600;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 768px) {
    form {
      width: 400px;
    }

    button {
      width: 400px;
    }
  }
`

export default ForgotPassword
