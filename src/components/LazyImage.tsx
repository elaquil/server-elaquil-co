import { useEffect, useState } from "react";
import styled from "styled-components";

interface LazyImageProps {
  image: string;
  preview: string;
  className?: string;
  alt?: string;
}

const ImageContainer = styled.div`
  cursor: pointer;
  transition: transform 0.3s;
  border: 1px solid var(--clr-dark);
  border-radius: 5px;
  z-index: 1;

  &:hover {
    transform: scale(1.1);
  }
`;


const LazyImage = ({
  preview,
  image,
  alt,
  className,
}:LazyImageProps) => {
  const [currentImage, setCurrentImage] = useState(preview);
  const [loading, setLoading] = useState(true);

  const fetchImage = (src: string) => {
    const loadingImage = new Image();
    loadingImage.src = src;
    loadingImage.onload = () => {
      setCurrentImage(loadingImage.src);
      setLoading(false);
    };
  };

  useEffect(() => {
    fetchImage(image);
  }, []);

  return (
    <ImageContainer>
      <img
        style={{
          filter: `${loading ? 'blur(20px)' : ''}`,
          transition: '0.1s filter linear',
          width: '100%',
          margin: '0',
          borderRadius: '5px',
        }}
        src={currentImage}
        alt={alt}
        className={className}
      />
    </ImageContainer>
  );
};


export default LazyImage;