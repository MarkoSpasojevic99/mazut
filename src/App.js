import React, { useState } from 'react';
import LanguageSelection from './components/LanguageSelection';
import CategorySelection from './components/CategorySelection';
import ItemSelection from './components/ItemSelection';
import ItemDetails from './components/ItemDetails';
import './index.css';
import logo from './assets/logo.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [language, setLanguage] = useState(null);
  const [category, setCategory] = useState(null);
  const [item, setItem] = useState(null);

  const goBack = () => {
    if (item) {
      setItem(null);
    } else if (category) {
      setCategory(null);
    } else if (language) {
      setLanguage(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative bg-cover bg-center pt-10 overflow-y-auto">
      {language && (
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Logo" className="w-32 h-auto mb-2" />
        </div>
      )}
      {!language ? (
        <LanguageSelection setLanguage={setLanguage} />
      ) : !category ? (
        <CategorySelection setCategory={setCategory} language={language} />
      ) : !item ? (
        <ItemSelection setItem={setItem} category={category} language={language} />
      ) : (
        <ItemDetails item={item} language={language} goBack={goBack} />
      )}
      {language && (
        <button
          onClick={goBack}
          className="absolute top-4 left-4 p-2 text-white"
          style={{ fontSize: '2rem' }} 
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
    </div>
  );
};

export default App;


