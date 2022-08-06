import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

declare module namespace {
  interface GalleryProps {
    data: Data;
  }
  interface Data {
    photoset: Photoset;
    stat: string;
  }
  interface Photoset {
    id: string;
    primary: string;
    owner: string;
    ownername: string;
    photo: Photo[];
    page: number;
    per_page: number;
    perpage: number;
    pages: number;
    title: string;
    total: number;
  }
  interface Photo {
    id: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    isprimary: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
  }
}

const Gallery = ({ data }: namespace.GalleryProps) => {
  const [renderBuffer, setRenderBuffer] = useState(10);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Error!');
  };

  const photos = data.photoset.photo;
  const renderedPhotos = photos.map((photo, i) => {
    const photoUrl = `https://live.staticflickr.com/${ photo.server }/${ photo.id }_${ photo.secret }_b.jpg`;
    return (
      <span key={ `photo_${ i }` }>
        <LazyLoadImage className='image' src={ photoUrl } alt='' onError={ (e) => handleError(e) }/>
      </span>
    );
  });

  return (
    <div className='outer-image-wrapper'>
      <div className='inner-gallery-wrapper'>
        { renderedPhotos }
      </div>
    </div>
  )
}

export default Gallery;