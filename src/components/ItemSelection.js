import React from 'react';
import items from '../data/items';

const ItemSelection = ({ setItem, category, language }) => {
  const categoryItems = items[category];

  if (!categoryItems) {
    return <div className="text-center text-white">No items found for this category.</div>;
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4 text-white font-bold">Select Item</h1>
      <div className="flex flex-col items-center space-y-4">
        {categoryItems.map((item) => (
          <div key={item.id} onClick={() => setItem(item)} className="cursor-pointer">
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






