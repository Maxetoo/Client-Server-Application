import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Empty from '../../assets/images/Empty Illustration.png'

const EmptyGroup = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <img src={Empty} alt='empty' />
      <h3>Nothing yet..😅</h3>
      <p>Tap on the add button to create group</p>
      <button type='button' onClick={() => navigate('/groups/createGroup')}>
        Create
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 80%;
  height: auto;
  border-radius: 5px;
  text-align: center;
  color: #ffffff;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  /* border: solid 1px black; */

  img {
    margin-top: -2rem;
    width: 200px;
    height: 200px;
  }

  p {
    width: 70%;
    text-align: center;
    margin-top: 0.5rem;
  }

  button {
    margin: 1rem;
    height: 50px;
    width: 90%;
    border: none;
    background: var(--login-secondary);
    color: var(--white-col);
    font-size: 0.9em;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
  }
`
export default EmptyGroup
