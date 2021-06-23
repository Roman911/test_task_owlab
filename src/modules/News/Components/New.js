import './styles.scss'

export const New = ({ title, body }) => {
  return <div className='new' >
    <h2>{ title }</h2>
    <p>{ body }</p>
  </div>
}