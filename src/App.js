import React, { useState } from 'react';
import LanguageSelection from './components/LanguageSelection';
import CategorySelection from './components/CategorySelection';
import ItemSelection from './components/ItemSelection';
import ItemDetails from './components/ItemDetails';
import SubCategorySelection from './components/SubCategorySelection';
import './index.css';
import logo from './assets/logo.png'; // Import logo
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [language, setLanguage] = useState(null);
  const [category, setCategory] = useState(null);
  const [subCategory, setSubCategory] = useState(null);
  const [item, setItem] = useState(null);

  const goBack = () => {
    if (item) {
      setItem(null);
    } else if (subCategory) {
      setSubCategory(null);
    } else if (category) {
      setCategory(null);
    } else if (language) {
      setLanguage(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start relative bg-cover bg-center pt-10">
      {language && (
        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="Logo" className="w-32 h-auto mb-2" />
        </div>
      )}
     {!language ? (
        <LanguageSelection setLanguage={setLanguage} />
      ) : !category ? (
        <CategorySelection setCategory={setCategory} language={language} />
      ) : category === 'bottled_beers' && !subCategory ? (
        <SubCategorySelection setSubCategory={setSubCategory} language={language} />
      ) : !item ? (
        <ItemSelection setItem={setItem} category={subCategory || category} language={language} />
      ) : (
        <ItemDetails item={item} language={language} goBack={goBack} />
      )}
      {language && (
        <button
          onClick={goBack}
          className="absolute top-4 left-4 p-2 text-white"
          style={{ fontSize: '2rem' }} // Adjust the size of the arrow
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      )}
    </div>
  );
};

export default App;




