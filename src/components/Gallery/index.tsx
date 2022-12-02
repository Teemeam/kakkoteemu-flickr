import { useState } from 'react';

/* Components */
import GalleryImage from '../GalleryImage';

/* Assets */
import icon from '../../assets/android-chrome-192x192.png';

const Gallery = ( { height, data }: CompleteData) => {
  const [renderBuffer, setRenderBuffer] = useState<number>(5);

  const photos = data;
  const renderedPhotos = photos?.map((photo, i: number) => {
    if (i <= renderBuffer) {
      return (
        <GalleryImage key={ `gallery-image_${ i }` } photo={ photo } i={ i }/>
      );
    }
  });

  return (
    <div className='sm:h-[85vh] h-auto sm:w-auto w-11/12 mx-auto scroll-smooth overflow-x-scroll overflow-y-hidden scrollbar-hide'>
      <div className='sm:h-full h-auto sm:w-auto w-full flex sm:flex-row flex-col'>
        { renderedPhotos }
        <div className='flex justify-center items-center sm:pr-10'>
          <button type='button' className='relative h-20 w-20 font-montserrat font-light text-sm text-center opacity-80 hover:opacity-100 hover:rotate-45 transition-opacity transition-transform text-black' aria-label='Load more' onClick={ () => setRenderBuffer(renderBuffer + 5) }>
            <img className='block w-full' src={ icon } alt=''/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery;