import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper>
      <div className='error-section'>
        <h2>404</h2>
        <p>Page Not Found!</p>
        <Link to='/'>
          <button type='button'>Go Back</button>
        </Link>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .error-section {
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
  }
  h2 {
    font-size: 7em;
    margin-top: -2rem;
  }
  p {
    margin-bottom: 1rem;
  }

  button {
    margin: 1rem;
    height: 50px;
    width: 200px;
    border: none;
    background: var(--login-secondary);
    color: var(--white-col);
    font-size: 0.9em;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2em;
  }
`
export default Error
