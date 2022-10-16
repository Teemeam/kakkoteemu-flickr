import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryImage = ({ photo, i }: InfoWrapper) => {
  const [showDescription, setShowDescription] = useState(false);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Error while lazy loading images: ${ e }`);
  };

  return (
    <div className='relative sm:h-full h-auto sm:w-auto w-full sm:first-of-type:ml-10 sm:mr-5 mr-0 sm:mb-0 mb-3 cursor-pointer' key={ `photo_${ i }` } onClick={ () => setShowDescription(!showDescription) } onMouseLeave={ () => setShowDescription(false) }>
      <LazyLoadImage className='max-w-none sm:h-full h-auto sm:w-auto w-full' src={ `https://live.staticflickr.com/${ photo?.server }/${ photo?.id }_${ photo?.originalsecret }_b.jpg` } alt='' effect='blur' height='100%' onError={ (e) => handleError(e) }/>
      <div className={ 'absolute bottom-0 left-0 ' + (showDescription ? 'block' : 'hidden') }>
        <p className='font-montserrat font-light'>{ photo?.description?._content }</p>
      </div>
    </div>
  )
}

export default GalleryImage;