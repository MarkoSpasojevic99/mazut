import React from 'react';
import categories from '../data/categories';

const CategorySelection = ({ setCategory, language }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4 text-white font-bold">Select Category</h1>
      <div className="flex flex-col items-center space-y-4">
        {categories.map((category) => (
          <div key={category.id} onClick={() => setCategory(category.id)} className="cursor-pointer">
            <img 
             src={require(`../assets/${category.imageName}`)}  
              alt={category.name[language]} 
              className="w-48 h-48 object-cover mb-2"
            />
            <p className="text-white font-bold">{category.name[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;





