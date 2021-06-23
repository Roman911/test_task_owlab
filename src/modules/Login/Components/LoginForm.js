import './styles.scss'

export const LoginForm = ({ onSubmit, nameRef, passwordRef }) => {
  return <div className='form'>
    <h1>Авторизация</h1>
    <form onSubmit={ onSubmit } >
      <input className='form__input' type="text" ref={ nameRef } placeholder='Введите имя' />
      <input className='form__input' type="password" ref={ passwordRef } placeholder='Введите пароль' />
      <button className='form__submit' type='submit'>sub</button>
    </form>
  </div>
}