import { useState } from 'react';
import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

const ImageGalleryItem = ({route,description,bigPicture})=>{
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
    return (
      <>
      <li className={s.ImageGalleryItem}>
        <img
          src={route}
          alt={description}
          data-source={bigPicture}
          className={s['ImageGalleryItem-image']}
          onClick={toggleModal}
        />
      </li>
        {showModal && (<Modal onClose={toggleModal}>
          <Loader/>
          <img src={bigPicture} alt={description} />
        </Modal>)}
        </>

    );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  route: PropTypes.string,
  description: PropTypes.string,
  bigPicture: PropTypes.string,
};