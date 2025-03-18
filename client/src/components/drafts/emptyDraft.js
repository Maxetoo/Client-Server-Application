import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Empty from '../../assets/images/Empty Illustration.png'

const EmptyDraft = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <img src={Empty} alt='empty' />
      <h3>Your draft is currently empty!</h3>
      <button
        type='button'
        onClick={() => {
          navigate('/home')
        }}
      >
        Back
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 80%;
  min-height: 200px;
  border-radius: 5px;
  text-align: center;
  /* background: #435c6d; */
  color: #ffffff;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  img {
    margin-top: -2rem;
    width: 200px;
    height: 200px;
  }

  button {
    margin: 1rem;
    height: 50px;
    width: 90%;
    border: none;
    background: var(--login-secondary);
    color: var(--white-col);
    font-size: 1em;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
  }
`
export default EmptyDraft
