import { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';

/* Import dynamically */
const Gallery = lazy(() => import('../Gallery'));

const App = () => {
  /* State variables */
  const [data, setData] = useState(null);

  /* Get data */
  const getData = () => {
    const photosetUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${ import.meta.env.VITE_APP_KEY }&photoset_id=${ import.meta.env.VITE_PHOTOSET_ID }&user_id=${ import.meta.env.VITE_USER_ID }&format=json&nojsoncallback=1`;
    const serveRequest = axios.get(photosetUrl)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
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