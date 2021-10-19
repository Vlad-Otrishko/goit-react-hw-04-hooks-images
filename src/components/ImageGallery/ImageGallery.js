import {useState, useEffect} from 'react';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Rejected from '../Rejected/Rejected';
import Loader from '../Loader/Loader';
import IdleMessage from '../IdleMessage/IdleMessage';
import ApiService from '../../services/API';
import PropTypes from 'prop-types';
const galleryApi = new ApiService();

const ImageGallery = ({ query }) => {


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
          return result;
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
    return setImages(images=>[...images, ...update]);
  };

  useEffect(() => {
    if (!query) return;
    setStatus('pending');
    galleryApi.reset();
    galleryApi.request = query;
    handleQuery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    if (images.length === 0) { return; }
    // console.log('from scroll', images, images.length);
    if (images.length > 12) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
}, [images]
  )

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

