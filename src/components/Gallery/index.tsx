import { SyntheticEvent, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

declare module namespace {
  interface Props {
    data: Data[];
  }
  interface Data {
    id?: string;
    secret?: string;
    server?: string;
    originalsecret?: string;
    originalformat?: string;
    description?: Description;
    dates?: Dates;
  }
  interface Description {
    _content: string;
  }
  interface Dates {
    posted: string;
    taken: string;
  }
}

const Gallery = ( { data }: namespace.Props) => {
  const [renderBuffer, setRenderBuffer] = useState<number>(10);

  /* Handle error */
  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    console.log('Error!');
  };

  const photos = data;
  console.log(photos.length);
  const reversed = photos?.sort((a, b) => (a.dates!.posted < b.dates!.posted) ? 1 : ((b.dates!.posted < a.dates!.posted) ? -1 : 0));
  const renderedPhotos = reversed?.map((photo, i: number) => {
    if (i <= renderBuffer) {
      return (
        <span key={ `photo_${ i }` }>
          <LazyLoadImage className='image' src={ `https://live.staticflickr.com/${ photo?.server }/${ photo?.id }_${ photo?.originalsecret }_o.jpg` } alt='' onError={ (e) => handleError(e) }/>
        </span>
      );
    }
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