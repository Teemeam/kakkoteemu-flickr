import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Gallery = ( { height, data }: CompleteData) => {
  const [renderBuffer, setRenderBuffer] = useState<number>(10);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log(`Error while lazy loading images: ${ e }`);
  };

  const photos = data;
  const renderedPhotos = photos?.map((photo, i: number) => {
    if (i <= renderBuffer) {
      return (
        <div className='h-full first-of-type:ml-10 mr-5' key={ `photo_${ i }` }>
          <LazyLoadImage className='max-w-none h-full' src={ `https://live.staticflickr.com/${ photo?.server }/${ photo?.id }_${ photo?.originalsecret }_h.jpg` } alt='' onError={ (e) => handleError(e) }/>
        </div>
      );
    }
  });

  return (
    <div className='h-[85vh] scroll-smooth'>
      <div className='h-full flex flex-row'>
        { renderedPhotos }
        <div className='ml-10 pr-10'>
          <button onClick={ () => setRenderBuffer(renderBuffer + 5) }>Load more</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery;