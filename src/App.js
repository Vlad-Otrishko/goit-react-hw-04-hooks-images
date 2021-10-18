
import {useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import s from './App.module.css';

const App = () => {
  const [query, setQuery] = useState('');
  
  const formSubmitHandler = formQuery => {
    setQuery(formQuery);
  }
    

  
  return (
    <div className={s.container}>
      <SearchBar onSubmit={formSubmitHandler} />
      <ToastContainer autoClose={3000} position="top-right" />
     <ImageGallery query={query} /> 
    </div>
  );
 };
export default App;
