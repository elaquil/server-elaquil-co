import AnimatedLogo from './AnimatedLogo';
import './Header.css'
const Header = () => {
  return (
    <div className='centered'>
      <div className='titleContainer'>
        <AnimatedLogo />
      </div>
      <p>presents</p>
    </div>
  );
}

export default Header;