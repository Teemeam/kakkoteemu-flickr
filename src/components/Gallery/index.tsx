import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = ( { height, data }: CompleteData) => {
  const [renderBuffer, setRenderBuffer] = useState<number>(10);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Error!');
  };

  const photos = data;
  const renderedPhotos = photos?.map((photo, i: number) => {
    if (i <= renderBuffer) {
      return (
        <div className='h-full mr-3' key={ `photo_${ i }` }>
          <LazyLoadImage className='image max-w-none h-full' src={ `https://live.staticflickr.com/${ photo?.server }/${ photo?.id }_${ photo?.originalsecret }_o.jpg` } alt='' onError={ (e) => handleError(e) }/>
        </div>
      );
    }
  });

  return (
    <div className='outer-image-wrapper h-full overflow-x-scroll'>
      <div className='inner-gallery-wrapper h-full flex flex-row'>
        { renderedPhotos }
      </div>
    </div>
  )
}

export default Gallery;