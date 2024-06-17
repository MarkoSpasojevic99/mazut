import React from 'react';
import bottledBeers from '../data/items/bottledBeers';
import draftBeers from '../data/items/draftBeers';
import ciders from '../data/items/ciders';
import translations from '../data/translations';

const getCategoryItems = (category) => {
  switch (category) {
    case 'bottled_beers':
      return bottledBeers;
    case 'draft_beers':
      return draftBeers;
    case 'ciders':
      return ciders;
    default:
      return [];
  }
};

const ItemSelection = ({ setItem, category, language }) => {
  const categoryItems = getCategoryItems(category);

  if (!categoryItems.length) {
    return <div className="text-center text-white">No items found for this category.</div>;
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4 text-white font-bold">{translations.selectItem[language]}</h1>
      <div className="flex flex-col items-center space-y-4">
        {categoryItems.map((item) => (
          <div key={item.id} onClick={() => setItem({ ...item, category })} className="cursor-pointer flex flex-col items-center">
            <img 
              src={require(`../assets/${item.imageName}`)} 
              alt={item.name[language]} 
              className="w-48 h-48 object-cover mb-2"
            />
            <div className="text-white font-bold text-center">
              <div>{item.price} RSD</div>
              <div>{item.name[language]}</div>
              <div>VRSTA: {item.style[language]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSelection;






