import { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  /* Constant variables */
  const photosetUrl = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${ import.meta.env.VITE_APP_KEY }&photoset_id=${ import.meta.env.VITE_PHOTOSET_ID }&user_id=${ import.meta.env.VITE_USER_ID }&format=json&nojsoncallback=1`

  /* State variables */
  const [data, setData] = useState(null);

  /* Get data */
  useEffect(() => {
    const serveRequest = axios.get(photosetUrl)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1 className="text-3xl font-bold text-red-600">
        Install & Setup Vite + React + Typescript + Tailwind CSS 3
      </h1>
    </div>
  )
}

export default App;