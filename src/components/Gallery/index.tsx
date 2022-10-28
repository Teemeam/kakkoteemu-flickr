import { useState } from 'react';

/* Components */
import GalleryImage from '../GalleryImage';

const Gallery = ( { height, data }: CompleteData) => {
  const [renderBuffer, setRenderBuffer] = useState<number>(5);

  const photos = data;
  const renderedPhotos = photos?.map((photo, i: number) => {
    if (i <= renderBuffer) {
      return (
        <GalleryImage photo={ photo } i={ i }/>
      );
    }
  });

  return (
    <div className='sm:h-[85vh] h-auto sm:w-auto w-11/12 mx-auto scroll-smooth overflow-x-scroll overflow-y-hidden scrollbar-hide'>
      <div className='sm:h-full h-auto sm:w-auto w-full flex sm:flex-row flex-col'>
        { renderedPhotos }
        <div className='sm-min-h-auto min-h-100px sm:h-full h-auto sm:min-w-200px sm:w-auto w-full sm:pr-10'>
          <button className='h-full w-full font-montserrat font-medium text-sm text-center bg-stone-200 hover:bg-stone-300 transition-colors' onClick={ () => setRenderBuffer(renderBuffer + 5) }>Load more</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery;