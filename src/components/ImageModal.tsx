import React, { useState } from 'react';
import styled from 'styled-components';

const Modal = styled.div<{ isClicked: boolean }>`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.0);
  transition: background-color 1s ;
  z-index: 998;
  cursor: pointer;

  ${(props) =>
    props.isClicked &&
    `
    display: block;
    animation: modal-animate-in 0.3s ease-in-out forwards;
    `}
  @keyframes modal-animate-in {
    from{
      background-color: rgba(0, 0, 0, 0.0);
    }
    to{
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
  @keyframes modal-animate-out {
    from{
      background-color: rgba(0, 0, 0, 0.5);
    }
    to{
      background-color: rgba(0, 0, 0, 0.0);
    }
  }
`;

const Image = styled.img<{ isClicked: boolean }>`
  cursor: pointer;
  transition: transform 0.3s;
  border: 1px solid var(--clr-dark);
  border-radius: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;

const FullScreenImage = styled.img<{ isClicked: boolean }>`
  display: none;
${(props) =>
    props.isClicked &&
    `
    transition: width 0.3s;
    display: block;
    border: none;
    border-radius: 0;
    transition: none;
    cursor: unset;
    max-width: 90%;
    max-height: 90%;
    margin: 0;
    width: max-content;
    object-fit: contain;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    opacity: 0;
    transform-origin: left;
    animation: image-animate-in 0.3s ease-in-out 0.1s forwards;
    `}
  @keyframes image-animate-in {
    0%{
      transform: scale(0.9) translate(-50%, -50%);
      opacity: 0;
    }
    50%{
      opacity: 1;
    }
    100%{
      transform: scale(1) translate(-50%, -50%);
      opacity: 1;
    }
  }
  @keyframes image-animate-out {
    0%{
      transform: scale(1) translate(-50%, -50%);
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    100%{
      transform: scale(0.9) translate(-50%, -50%);
      opacity: 0;
    }
  }
`;


interface ImageModalProps {
  src: string;
  className?: string;
  alt?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, className = "", alt = "" }) => {
  const [isClicked, setIsClicked] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const fullScreenImageRef = React.useRef<HTMLImageElement>(null);

  const handleClick = () => {
    if(isClicked) {
      fullScreenImageRef.current?.style.setProperty('animation', 'image-animate-out 0.3s ease-in-out forwards');
      modalRef.current?.style.setProperty('background-color', 'rgba(0, 0, 0, 0.5)');
      modalRef.current?.style.setProperty('animation', 'modal-animate-out 0.3s ease-in-out 0.1s forwards');
      document.body.style.overflow = 'unset';
      setTimeout(() => {
        setIsClicked(!isClicked);
        modalRef.current?.style.removeProperty('animation');
        modalRef.current?.style.removeProperty('background-color');
        fullScreenImageRef.current?.style.removeProperty('animation');
      }, 600);
    }
    else{
      document.body.style.overflow = 'hidden';
      setIsClicked(!isClicked);
    }
  };

  return(
    <>
      <>
        <Modal isClicked={isClicked} onClick={handleClick} ref={modalRef}></Modal>
        <FullScreenImage src={src} alt={alt} isClicked={isClicked} onClick={handleClick} ref={fullScreenImageRef} />
      </>
      <Image src={src} alt={alt} className={className} isClicked={isClicked} onClick={handleClick} loading='lazy'/>
    </>
    );
};

export default ImageModal;