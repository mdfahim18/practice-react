import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

type ImageDetailsProps = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImage] = useState<ImageDetailsProps[]>([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImage = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(`${url}?page${page}=1&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setLoading(false);
        setImage(data);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    if (url !== '') fetchImage(url);
  }, [url]);
  console.log(images);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>something went wrong</div>;
  }

  const handlePrev = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };
  const handleNext = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  return (
    <div className=' relative flex justify-center items-center w-[600px] h-[200px]'>
      <BsArrowLeftCircleFill
        onClick={handlePrev}
        className=' absolute w-[2rem] text-white drop-shadow-sm left-[1rem]'
      />
      {images && images.length > 0
        ? images.map((image, index) => (
            <img
              key={image.id}
              src={image.download_url}
              alt={image.download_url}
              className={
                currentImage === index
                  ? ' rounded-[0.5rem] shadow-md w-[100%] h-[100%]'
                  : ' rounded-[0.5rem] shadow-md w-[100%] h-[100%] hidden'
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className=' absolute w-[2rem] text-white drop-shadow-sm right-[1rem]'
      />
      <span className=' flex absolute bottom-[1rem]'>
        {images && images.length > 0
          ? images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={
                  currentImage === index
                    ? ' bg-white h-[15px] w-[15px] rounded-[50%] border-none outline-none mx-0 my-1'
                    : ' h-[15px] w-[15px] rounded-[50%] border-none outline-none mx-0 my-1 bg-gray-500'
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
