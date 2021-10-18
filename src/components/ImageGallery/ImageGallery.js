import {useState, useEffect} from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Rejected from '../Rejected/Rejected';
import Loader from '../Loader/Loader';
import IdleMessage from '../IdleMessage/IdleMessage';
import ApiService from '../../API';
import PropTypes from 'prop-types';

const galleryApi = new ApiService();

const ImageGallery = ({query})=>{

// class ImageGallery extends Component {
//   state = {
//     images: [],
//     error: null,
//     status: 'idle',
//   };

  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

 function handleQuery() {
   galleryApi
     .fetchCards()
     .then(result => {
       if (result.hits.length > 0) {
         updateImagesArray(result.hits);
         galleryApi.page += 1;
         scrollView();
         return;
       }
       throw new Error(`Sorry, but no result for ${galleryApi.query}`);
     })
     .catch(error => { setError(error); setStatus('rejected') });
  }
  const updateImagesArray = update => {
   setStatus('resolved');
    if (galleryApi.page === 1) {
     return setImages(update); 
    }
    return setImages ([...images, ...update]);
  };

  const scrollView = () => {
    console.log(images, images.length);
    if (images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
    return;
  };
  useEffect(() => {
    if (!query) return;
    setStatus('pending');
    galleryApi.reset();
    galleryApi.request = query;
    handleQuery();
    return query;
  }, [query]);

 const  loadMore=()=> {
    setStatus('pending');
    handleQuery();
  }

    if (status === 'idle') {
      return <IdleMessage/>;
    }
    if (status === 'pending') {
      return <Loader/>;
    }
    if (status === 'rejected') {
     return <Rejected message={error.message}/>
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={s.ImageGallery}>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                route={image.webformatURL}
                bigPicture={image.largeImageURL}
                description={image.tags}
              />
            ))}
          </ul>
          <Button handleClick={loadMore} />
        </>
      );
    }
  }

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string,
};

