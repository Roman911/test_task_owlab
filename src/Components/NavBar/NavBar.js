import React from "react"
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import classNames from "classnames"
import { userActions } from '../../redux/actions'
import './styles.scss'

const config = [
  {
    title: 'Новости',
    to: '/news'
  },
  {
    title: 'Профиль',
    to: '/profile'
  }
]

export const NavBar = ({ userAuth }) => {
  const dispatch = useDispatch()
  let { pathname } = useLocation()

  const handleClick = () => {
    localStorage.setItem('userData', JSON.stringify(false))
    dispatch(userActions.setData(false))
  }

  return <nav className='nav'>
    <div className='wrapper row'>
      <div className='row'>
        <Link to='/' >
          <span className='nav__logo'>
            test
          </span>
        </Link>
        <ul>
          { config.map((i, index) => {
            return <li key={ index } className={ classNames('nav__link', { 'active': pathname === i.to }) }>
              <Link to={ i.to } >{ i.title }</Link>
            </li>
          }) }
        </ul>
      </div>
      {
        userAuth ? <button className='nav__link' onClick={ () => handleClick() } >
            Выйти
          </button>
          : <span className={ classNames('nav__link', { 'active': pathname === '/login' }) }>
            <Link to='/login' >
              Войти
            </Link>
          </span> }
    </div>
  </nav>
}