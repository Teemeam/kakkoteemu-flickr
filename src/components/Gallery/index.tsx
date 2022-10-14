import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

declare module namespace {
  export interface Data {
    data: RootObject[];
  }
  export interface RootObject {
    photo?: Photo;
  }
  export interface Photo {
    id: string;
    secret: string;
    server: string;
    originalsecret: string;
    originalformat: string;
    description: Description;
    dates: Dates;
  }
  export interface Description {
    _content: string;
  }
  export interface Dates {
    posted: string;
    taken: string;
  }
}

const Gallery = ({ data }: namespace.Data) => {
  const [renderBuffer, setRenderBuffer] = useState(10);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Error!');
  };

  /* const photos = data.photoset.photo;
  const reversed = photos.reverse();
  const renderedPhotos = reversed.map((photo, i) => {
    if (i <= renderBuffer) {
      return (
        <span key={ `photo_${ i }` }>
          <LazyLoadImage className='image' src={ photoUrl } alt='' onError={ (e) => handleError(e) }/>
        </span>
      );
    }
  }); */

  console.log(data);

  return (
    <div className='outer-image-wrapper'>
      <div className='inner-gallery-wrapper'>
        Hei
      </div>
    </div>
  )
}

export default Gallery;