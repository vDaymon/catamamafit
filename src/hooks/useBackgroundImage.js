import { useState, useEffect } from 'react';

const useBackgroundImage = (imagePath) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const img = new Image();
    
    img.onload = () => {
      setImageLoaded(true);
    };
    
    img.onerror = () => {
      setImageError(true);
    };
    
    img.src = imagePath;
  }, [imagePath]);

  return { imageLoaded, imageError };
};

export default useBackgroundImage;
