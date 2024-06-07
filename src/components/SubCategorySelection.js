import React from 'react';

const subCategories = [
  { id: 'beer', name: { en: 'Beer', sr: 'Pivo', ru: 'Пиво' } },
  { id: 'cider', name: { en: 'Cider', sr: 'Sajderi', ru: 'Сидр' } },
];

const SubCategorySelection = ({ setSubCategory, language }) => {
  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4 text-white font-bold">Select Subcategory</h1>
      <div className="flex flex-col items-center space-y-4">
        {subCategories.map((subCategory) => (
          <div key={subCategory.id} onClick={() => setSubCategory(subCategory.id)} className="cursor-pointer">
            <p className="text-white font-bold">{subCategory.name[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategorySelection;





