import { useState } from 'react';

/* Components */
import GalleryImage from '../GalleryImage';

/* Assets */
import icon from '../../assets/android-chrome-192x192.png';

const Gallery = ( { height, data }: CompleteData) => {
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const [renderBuffer, setRenderBuffer] = useState<number>(5);

  /* Count loaded images */
  const handleImageLoaded = () => {
    setLoadedImages((prevState) => prevState + 1);
  };

  const photos = data;
  const renderedPhotos = photos?.map((photo, i: number) => {
    if (i <= renderBuffer) {
      return (
        <GalleryImage key={ `gallery-image_${ i }` } photo={ photo } i={ i } handleImageLoaded={ handleImageLoaded }/>
      );
    }
  });

  /* Dynamic loader styles */
  const loaderConfig = {
    visible: 'visible opacity-100',
    hidden: 'invisible opacity-0',
  };

  return (
    <div className='relative sm:h-[85vh] h-auto sm:w-auto w-11/12 mx-auto scroll-smooth sm:overflow-x-scroll sm:overflow-y-hidden scrollbar-hide'>
      <div className='sm:h-full h-auto sm:w-auto w-full flex sm:flex-row flex-col'>
        {/* Gallery images */}
        { renderedPhotos }

        {/* Load more button */}
        <div className='flex justify-center items-center sm:pr-10'>
          <button type='button' className='relative h-20 w-20 font-montserrat font-light text-sm text-center opacity-80 hover:opacity-100 hover:rotate-45 transition-opacity transition-transform text-black' aria-label='Load more' onClick={ () => setRenderBuffer(renderBuffer + 5) }>
            <img className='block w-full' src={ icon } alt=''/>
          </button>
        </div>
      </div>

      {/* Loader */}
      <div className={ `absolute top-0 left-0 sm:bottom-0 w-full sm:min-h-auto h-screen ${ loadedImages >= 5 ? loaderConfig.hidden : loaderConfig.visible } transition-opacity bg-white` }>
        <div className='w-full h-full sm:ml-10 ml-auto bg-slate-50'/>
      </div>
    </div>
  )
}

export default Gallery;