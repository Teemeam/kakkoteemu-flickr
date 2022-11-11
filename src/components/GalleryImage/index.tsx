import { SyntheticEvent, useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

/* Flickr icon */
import flickrIcon from '../../assets/flickr-icon-80px.png';

const GalleryImage = ({ photo, i }: InfoWrapper) => {
  const [formattedDescription, setFormattedDescription] = useState<any>([]); // Type needs attention 
  const [showDescription, setShowDescription] = useState(false);
  const [descOpacity, setDescOpacity] = useState(false);
  const [descVisibility, setDescVisibility] = useState(false);

  /* Format description */
  useEffect(() => {
    if (photo?.description?._content) {
      const splitString: string[] = photo?.description?._content.split('\n');
      const filterArr: string[] = splitString.filter((row) => (row.includes('Film') || (row.includes('Camera'))));
      const createElements = filterArr?.map((sentence: string, i: number) => {
        return (
          <p key={ `description-element_${ i }` } className='font-montserrat font-medium text-sm text-center pb-3 text-slate-50'>{ sentence }</p>
        )
      });
      setFormattedDescription(createElements);
    }
  }, []);

  /* Transition */
  useEffect(() => {
    if (showDescription) {
      setDescVisibility(true);
      setDescOpacity(true);
    } else {
      setDescOpacity(false);
      const timer = setTimeout(() => setDescVisibility(false), 150);
      return () => clearTimeout(timer);
    }
  }, [showDescription]);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Error while lazy loading images: ${ e }`);
  };

  return (
    <div className='relative sm:h-full h-auto sm:w-auto w-full sm:first-of-type:ml-10 sm:mr-5 mr-0 sm:mb-0 mb-3 cursor-pointer' key={ `photo_${ i }` } onClick={ () => setShowDescription(!showDescription) } onMouseLeave={ () => setShowDescription(false) }>
      <LazyLoadImage className='max-w-none sm:h-full h-auto sm:w-auto w-full' src={ `https://live.staticflickr.com/${ photo?.server }/${ photo?.id }_${ photo?.originalsecret }_h.jpg` } alt='' effect='blur' height='100%' onError={ (e) => handleError(e) }/>
      <div className={ 'absolute top-0 right-0 bottom-0 left-0 transition-opacity bg-black/[.8] ' + (descOpacity ? 'opacity-100' : 'opacity-0') + (descVisibility ? ' visible' : ' invisible') }>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12'>
          { formattedDescription }
        </div>
        {/* Link to Flickr */}
        <div className='absolute top-3 right-3 w-8 h-8 transition-transform hover:scale-125'>
          <a className='w-full' href={ photo?.urls?.url[0]._content } target='_blank' rel='noopener noreferrer'>
            <img className='block w-full' src={ flickrIcon } alt='open original image on Flickr.'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default GalleryImage;