import React from 'react';
import itemDetails from './data/itemDetails';

const ItemDetails = ({ item, language }) => {
  return (
    <div className="text-center relative">
      <div className="flex flex-col items-center mb-4">
        <img src={`../assets/${item.brewery || item.company}.png`} alt={item.brewery} className="w-32 h-auto mb-2" />
        <h1 className="text-2xl mb-2 text-white font-bold">{item.name[language]}</h1>
        <img src={`../assets/${item.imageName}`} alt={item.name[language]} className="w-48 h-48 object-cover mx-auto mb-4" />
        <h2 className="text-xl mb-2 text-white font-bold">{itemDetails[item.id].brewery[language]}</h2>
        <p className="text-white font-bold">{itemDetails[item.id][language]}</p>
      </div>
    </div>
  );
};

export default ItemDetails;
