import { MouseEventHandler, useEffect, useRef } from 'react';
import './TickerButton.css';

interface tickerButtonProps {
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  anchor?: string;
  buttonText: string;
}

const TickerButton = ({onClick = (event)=>{event.preventDefault()}, anchor = "", buttonText}: tickerButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    document.fonts.ready.then(function () {
      const container = buttonRef.current;
      const text  = textRef.current;
      if (container && text) {
        const textWidth = text.offsetWidth;
        console.log(textWidth);
        container.style.width = `${textWidth}px`;
      }
      setTimeout(() => {
        if(container){
          container.style.transition = "width 0.2s ease-in-out";
        }
      }, 1);
    });
  }, [buttonText]);

  return(
    <a {...(anchor == "" ? {anchor: anchor} : {})} onClick={onClick}>
      <button className="tickerButton" ref={buttonRef}>
          <div className="tickerButtonContainer">
            <h2 className="tickerButtonText" ref={textRef}>{buttonText}</h2>
            <h2 className="tickerButtonText">{buttonText}</h2>
          </div>
      </button>
    </a>
  )
};

export default TickerButton;