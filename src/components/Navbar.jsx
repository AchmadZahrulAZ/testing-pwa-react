import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../redux/lang/actions';

const Navbar = () => {
  const lang = useSelector((state) => state.lang.language); // Ambil state bahasa dari Redux
  const dispatch = useDispatch();

  // Text untuk setiap bahasa
  const translations = {
    en: 'To-Do List',
    id: 'Daftar Tugas',
  };

  const handleLanguageChange = (language) => {
    dispatch(changeLanguage(language));
  };

  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container">
        <span className="navbar-brand mb-0 h1">{translations[lang]}</span>
        <div>
          <button
            className={`btn btn-${lang === 'en' ? 'primary' : 'secondary'} me-2`}
            onClick={() => handleLanguageChange('en')}
          >
            English
          </button>
          <button
            className={`btn btn-${lang === 'id' ? 'primary' : 'secondary'}`}
            onClick={() => handleLanguageChange('id')}
          >
            Indonesia
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
