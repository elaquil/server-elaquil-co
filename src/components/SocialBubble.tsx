import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-brands-svg-icons'
import './SocialBubble.css'

interface socialBubbleProps {
  anchor: string;
  icon: IconDefinition;
  target?: string;
}

const SocialBubble = ({anchor, icon, target = "_blank"}: socialBubbleProps) => {
  return(
    <a href={anchor} target={target}>
      <span className="socialBubble">
        <div className="socialBubbleContainer">
          <FontAwesomeIcon icon={icon} />
          <FontAwesomeIcon icon={icon} className='secondIcon' />
        </div>
      </span>
    </a>
  )
}

export default SocialBubble;