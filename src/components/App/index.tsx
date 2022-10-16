import { useState, useEffect, lazy, Suspense } from 'react';
import axios from 'axios';
import { credentials } from '../../lib/credentials.js';

/* Import dynamically */
const Header = lazy(() => import('../Header'));
const Gallery = lazy(() => import('../Gallery'));
const Footer = lazy(() => import('../Footer'));

const App = () => {
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [data, setData] = useState<Info[]>([]);

  /* Get additional info */
  const getInfo = (photosetData: Data) => {
    const photos = photosetData.photoset.photo;
    let dataArray: Info[] = [];
    let promises: object[] = [];
    for (let i = 0; i < photos.length; i += 1) {
      const infoUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${ credentials.app_key }&photo_id=${ photos[i].id }&format=json&nojsoncallback=1`;
      promises.push(
        axios.get(infoUrl)
          .then((result) => {
            dataArray.push(result.data.photo);
          })
          .catch((error) => {
            console.log(error);
          })
      );
    }
    Promise.all(promises).then(() => {
      const sortedDataArray = dataArray.sort((a, b) => (a.dates!.posted < b.dates!.posted) ? 1 : ((b.dates!.posted < a.dates!.posted) ? -1 : 0));
      setData(sortedDataArray);
    });
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
    <div className='pb-10'>
      <Header/>
      { data && (
        <Suspense fallback={ <div>Ladataan...</div> }>
          <Gallery height={ height } data={ data }/>
        </Suspense>) }
      <Footer/>
    </div>
  )
}

export default App;