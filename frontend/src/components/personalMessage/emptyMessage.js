import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { copyToClipboard, killCopyAlert } from '../../slices/eventSlice'
import { getProfileLogs } from '../../slices/profileSlice'
import Empty from '../../assets/images/Empty Illustration.png'

const EmptyMessage = () => {
  const { loading, profile } = useSelector((store) => store.profile)
  const { username } = profile
  const { textCopied } = useSelector((store) => store.actions)
  const currentUrl = `${window.origin}/${username}`
  const dispatch = useDispatch()

  const shareUrl = () => {
    window.navigator
      .share({
        url: currentUrl,
        title: 'Writeme',
        text: `Send a secret message to ${username}...`,
      })
      .then(() => console.log('success'))
      .catch(() => 'Error')
  }

  useEffect(() => {
    dispatch(getProfileLogs())
  }, [])

  return (
    <Wrapper>
      <img src={Empty} alt='empty' />
      <h3>Nothing so far..😅</h3>
      <p>Tap on the button below to share profile</p>
      <button
        type='button'
        className={loading ? 'btn-loading' : ''}
        onClick={shareUrl}
      >
        Share link
      </button>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  width: 80%;
  min-height: 200px;
  border-radius: 5px;
  text-align: center;
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

  .btn-loading {
    opacity: 0.8;
  }

  @media only screen and (min-width: 768px) {
    button {
      width: 50%;
    }
  }
`
export default EmptyMessage
