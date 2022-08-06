import { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

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

  /* */
  const getInfo = (photosetData: namespace.Data) => {
    const photos = photosetData.photoset.photo;
    for (let i = 0; i < 5; i += 1) {
      const infoUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${ import.meta.env.VITE_APP_KEY }&photo_id=${ photos[i].id }&format=json&nojsoncallback=1`;
      const serveRequest = axios.get(infoUrl)
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
    const photosetUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${ import.meta.env.VITE_APP_KEY }&photoset_id=${ import.meta.env.VITE_PHOTOSET_ID }&user_id=${ import.meta.env.VITE_USER_ID }&format=json&nojsoncallback=1`;
    const serveRequest = axios.get(photosetUrl)
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