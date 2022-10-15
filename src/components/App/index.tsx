import { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { credentials } from '../../lib/credentials.js';

/* Import dynamically */
const Gallery = lazy(() => import('../Gallery'));

declare module namespace {
  interface Data {
    photoset: Photoset;
  }
  interface Photoset {
    id: string;
    photo: Photo[];
  }
  interface Photo {
    id: string;
    secret: string;
    server: string;
  }
}

const App = () => {
  /* State variables */
  const [data, setData] = useState<object[]>([]);

  /* Get additional info */
  const getInfo = (photosetData: namespace.Data) => {
    const photos = photosetData.photoset.photo;
    console.log(photos.length);
    for (let i = 0; i < photos.length; i += 1) {
      const infoUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${ credentials.app_key }&photo_id=${ photos[i].id }&format=json&nojsoncallback=1`;
      axios.get(infoUrl)
        .then((result) => {
          setData(oldArray => [...oldArray, result.data.photo])
        })
        .catch((error) => {
          console.log(error);
        })
    }
  };

  /* Get data */
  const getData = () => {
    const photosetUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${ credentials.app_key }&photoset_id=${ credentials.photoset_id }&user_id=${ credentials.user_id }&format=json&nojsoncallback=1`;
    axios.get(photosetUrl)
      .then((result) => {
        getInfo(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  /* On mount */
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      { data && (
        <Suspense fallback={ <div>Ladataan...</div> }>
          <Gallery data={ data }/>
        </Suspense>) }
    </div>
  )
}

export default App;