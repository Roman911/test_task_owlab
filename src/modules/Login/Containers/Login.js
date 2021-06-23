import React from "react"
import { useDispatch } from 'react-redux'
import { LoginForm } from "../Components"
import { userActions } from '../../../redux/actions'
import { Modal } from "../../../Components"

export const Login = () => {
  const dispatch = useDispatch()
  const nameRef = React.useRef('')
  const passwordRef = React.useRef('')
  const [ error, setError ] = React.useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    if (nameRef.current.value === 'Admin') {
      if (passwordRef.current.value === '12345') {
        localStorage.setItem('userData', JSON.stringify(true))
        dispatch(userActions.setData(true))
      } else {
        setError(true)
      }
    } else {
      setError(true)
    }
  }

  React.useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false)
      }, 2000)
    }
  }, [ error ])

  return <>
    <LoginForm onSubmit={ onSubmit } nameRef={ nameRef } passwordRef={ passwordRef } />
    { error && <Modal/> }
  </>
}