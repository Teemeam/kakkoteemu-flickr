import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/App.css';

function App() {
  /* Constant variables */
  const app_key = '5eb244406a33d48b10c1123269a7f5eb';
  const photoset_id = '72157718780020052';
  const user_id = '134442412@N06';
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${ app_key }&photoset_id=${ photoset_id }&user_id=${ user_id }&format=json&nojsoncallback=1`

  /* State variables */
  const [data, setData] = useState(null);

  useEffect(() => {
    const serveRequest = axios.get(url)
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className='App'>
      
    </div>
  )
}

export default App;