import React from 'react'
import styled from 'styled-components'
import Mail from '../../assets/images/mail-illustration.png'
import { useNavigate } from 'react-router-dom'

const MessageSent = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <img src={Mail} alt='message delivered' />
      <h3>Message delivered!</h3>
      <p className='guide'>
        Create your profile to start sending and receiving anonymous messages
      </p>
      <button type='button' onClick={() => navigate('/home')}>
        Go Back
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 80%;
  min-height: 200px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  /* border: solid 1px black; */

  img {
    margin: 2rem;
    height: auto;
    width: 100%;
    object-fit: cover;
  }

  .guide {
    margin: 0.5rem;
    font-size: 0.95em;
  }
`
export default MessageSent
