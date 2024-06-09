import React from 'react';
import bottledBeers from '../data/items/bottledBeers';
import draftBeers from '../data/items/draftBeers';
import ciders from '../data/items/ciders';

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
      <h1 className="text-2xl mb-4 text-white font-bold">Select Item</h1>
      <div className="flex flex-col items-center space-y-4">
        {categoryItems.map((item) => (
          <div key={item.id} onClick={() => setItem({ ...item, category })} className="cursor-pointer">
            <img 
              src={require(`../assets/${item.imageName}`)} 
              alt={item.name[language]} 
              className="w-48 h-48 object-cover mb-2"
            />
            <p className="text-white font-bold">{item.name[language]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemSelection;








