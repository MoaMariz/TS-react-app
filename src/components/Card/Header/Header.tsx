import './Header.css'
import Bank from '../../../assets/images/Bank.png'

export const Header  = () => {
  return(
    <div className='header'>
      <img src={Bank} alt="Imagem-Logo" />
    </div>
  )
}
