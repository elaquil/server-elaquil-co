import { useRef, useState } from 'react';
import './IPContainer.css'

interface IPContainerProps {
  publicIp: string | undefined;
}

const IPContainer = (
  {publicIp} : IPContainerProps
) => {
  const [copyToClipboardText, setCopyToClipboardText] = useState('COPY');
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleCopyToClipboard = () => {
    if(publicIp === undefined) return;
    if(buttonRef.current === null) return;
    navigator.clipboard.writeText(publicIp);
    setCopyToClipboardText('COPIED!');
    buttonRef.current.disabled = true;
    buttonRef.current.classList.add('disabled');
    setTimeout(() => {
      setCopyToClipboardText('COPY');
      if(buttonRef.current === null) return;
      buttonRef.current.disabled = false;
      buttonRef.current.classList.remove('disabled');
    }, 2000);
  }

  return (
    //Conditionally render error if ip is undefined
    <div>
      {publicIp === undefined ?
      <h2>Error fetching IP, maybe force restart the server?</h2> : 
      <div className='IPParentContainer'>
        <div className='IPContainer InlineBlock'>
          <h2>{publicIp}</h2>
        </div>
        <div className='InlineBlock'>
        <button className='clipBoardButton' onClick={handleCopyToClipboard} ref={buttonRef}><h2>{copyToClipboardText}</h2></button>
        </div>
      </div>      
      }
    </div>
  )
}

export default IPContainer;
