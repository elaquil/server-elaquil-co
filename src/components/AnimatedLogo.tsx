import './AnimatedLogo.css'

const AnimatedLogo = () => {

  return (
    <div className = 'animatedLogoContainer'>
      <video autoPlay muted loop webkit-playsinline="true" playsInline={true} className='animatedLogo'>
        <source src="ElaquilCoLogoInOutWeb.mp4"></source>
        <img src="ElaquilLogoFallback.png"></img>
      </video>
    </div>
  )
}

export default AnimatedLogo;