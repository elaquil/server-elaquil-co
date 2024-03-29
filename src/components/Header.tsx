import AnimatedLogo from './AnimatedLogo';
import './Header.css'
const Header = () => {
  return (
    <div className='centered'>
      <div className='titleContainer'>
        <AnimatedLogo />
      </div>
      <p>presents</p>
      <div className='logoContainer'>
        <img src='Minecraft Alpha Logo.png' alt='Minecraft Logo' />
      </div>
    </div>
  );
}

export default Header;