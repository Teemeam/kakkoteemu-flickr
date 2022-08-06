import { SyntheticEvent, useState } from 'react';
import axios from 'axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';

declare module namespace {
  export interface Data {
    data: RootObject;
  }
  export interface RootObject {
    photo: Photo;
  }
  export interface Photo {
    id: string;
    secret: string;
    server: string;
    farm: number;
    dateuploaded: string;
    isfavorite: number;
    license: string;
    safety_level: string;
    rotation: number;
    originalsecret: string;
    originalformat: string;
    owner: Owner;
    title: Title;
    description: Description;
    visibility: Visibility;
    dates: Dates;
    views: string;
    editability: Editability;
    publiceditability: Publiceditability;
    usage: Usage;
    comments: Comments;
    notes: Notes;
    people: People;
    tags: Tags;
    urls: Urls;
    media: string;
  }
  export interface Gift {
      gift_eligible: boolean;
      eligible_durations: string[];
      new_flow: boolean;
  }

  export interface Owner {
      nsid: string;
      username: string;
      realname: string;
      location: string;
      iconserver: string;
      iconfarm: number;
      path_alias: string;
      gift: Gift;
  }

  export interface Title {
      _content: string;
  }

  export interface Description {
      _content: string;
  }

  export interface Visibility {
      ispublic: number;
      isfriend: number;
      isfamily: number;
  }

  export interface Dates {
      posted: string;
      taken: string;
      takengranularity: number;
      takenunknown: string;
      lastupdate: string;
  }

  export interface Editability {
      cancomment: number;
      canaddmeta: number;
  }

  export interface Publiceditability {
      cancomment: number;
      canaddmeta: number;
  }

  export interface Usage {
      candownload: number;
      canblog: number;
      canprint: number;
      canshare: number;
  }

  export interface Comments {
      _content: string;
  }

  export interface Notes {
      note: any[];
  }

  export interface People {
      haspeople: number;
  }

  export interface Tag {
      id: string;
      author: string;
      authorname: string;
      raw: string;
      _content: string;
      machine_tag: boolean;
  }

  export interface Tags {
      tag: Tag[];
  }

  export interface Url {
      type: string;
      _content: string;
  }

  export interface Urls {
      url: Url[];
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