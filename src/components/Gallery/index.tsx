import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage, trackWindowScroll } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = ( { height, data, scrollPosition }: CompleteData) => {
  const [renderBuffer, setRenderBuffer] = useState<number>(10);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Error while lazy loading images: ${ e }`);
  };

  const photos = data;
  const renderedPhotos = photos?.map((photo, i: number) => {
    if (i <= renderBuffer) {
      return (
        <div className='sm:h-full h-auto sm:w-auto w-full sm:first-of-type:ml-10 sm:mr-5 mr-0 sm:mb-0 mb-3' key={ `photo_${ i }` }>
          <LazyLoadImage className='max-w-none sm:h-full h-auto sm:w-auto w-full' src={ `https://live.staticflickr.com/${ photo?.server }/${ photo?.id }_${ photo?.originalsecret }_b.jpg` } alt='' effect='blur' height='100%' scrollPosition={ scrollPosition } onError={ (e) => handleError(e) }/>
        </div>
      );
    }
  });

  return (
    <div className='sm:h-[85vh] h-auto sm:w-auto w-11/12 mx-auto scroll-smooth overflow-x-scroll overflow-y-hidden scrollbar-hide'>
      <div className='sm:h-full h-auto sm:w-auto w-full flex sm:flex-row flex-col'>
        { renderedPhotos }
        <div className='ml-10 pr-10'>
          <button onClick={ () => setRenderBuffer(renderBuffer + 5) }>Load more</button>
        </div>
      </div>
    </div>
  )
}

export default trackWindowScroll(Gallery);