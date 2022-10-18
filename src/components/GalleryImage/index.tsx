import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryImage = ({ photo, i }: InfoWrapper) => {
  const [showDescription, setShowDescription] = useState(false);

  console.log(photo);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Error while lazy loading images: ${ e }`);
  };

  return (
    <div className='relative sm:h-full h-auto sm:w-auto w-full sm:first-of-type:ml-10 sm:mr-5 mr-0 sm:mb-0 mb-3 cursor-pointer' key={ `photo_${ i }` } onClick={ () => setShowDescription(!showDescription) } onMouseLeave={ () => setShowDescription(false) }>
      <LazyLoadImage className='max-w-none sm:h-full h-auto sm:w-auto w-full' src={ `https://live.staticflickr.com/${ photo?.server }/${ photo?.id }_${ photo?.originalsecret }_h.jpg` } alt='' effect='blur' height='100%' onError={ (e) => handleError(e) }/>
      <div className={ 'absolute top-0 right-0 bottom-0 left-0 transition-opacity bg-black/[.8] ' + (showDescription ? 'opacity-100' : 'opacity-0') }>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12'>
          <p className='font-montserrat font-medium text-sm text-center pb-5 text-slate-50'>{ photo?.description?._content }</p>
          <p className='font-montserrat font-medium text-xs text-center text-slate-50'>
            <a className='border-b border-slate-50' href={ photo?.urls?.url[0]._content } target='_blank' rel='noopener noreferrer'>Original on Flickr</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default GalleryImage;