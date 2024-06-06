import React, { useState, useEffect } from 'react';

const categories = [
  { id: 'draft_beers', name: { en: 'Draft Beers', sr: 'Točena piva', ru: 'Разливное пиво' }, imageName: 'draft-beer.png' },
  { id: 'bottled_beers', name: { en: 'Bottled Beers', sr: 'Flaširana piva', ru: 'Бутылочное пиво' }, imageName: 'bottled-beer.png' },
];

const CategorySelection = ({ setCategory, language }) => {
  const [categoryImages, setCategoryImages] = useState({});

  useEffect(() => {
    const importImages = async () => {
      const images = {};
      for (const category of categories) {
        const image = await import(`../assets/${category.imageName}`);
        images[category.id] = image.default;
      }
      setCategoryImages(images);
    };

    importImages();
  }, []);

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4 text-white font-bold">Select Category</h1>
      <div className="flex flex-col items-center space-y-4">
        {categories.map((category) => (
          <div key={category.id} onClick={() => setCategory(category.id)} className="cursor-pointer">
            <img 
              src={categoryImages[category.id]} 
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


