import React from 'react';
import bottledBeersDetails from '../data/itemsDetails/bottledBeersDetails';
import draftBeersDetails from '../data/itemsDetails/draftBeersDetails';
import cidersDetails from '../data/itemsDetails/cidersDetails';

const getDetails = (category, itemId) => {
  switch (category) {
    case 'bottled_beers':
      return bottledBeersDetails[itemId];
    case 'draft_beers':
      return draftBeersDetails[itemId];
    case 'ciders':
      return cidersDetails[itemId];
    default:
      return null;
  }
};

const ItemDetails = ({ item, language }) => {
  const details = getDetails(item.category, item.id);
  if (!details) return null;

  return (
    <div className="text-center relative">
      <div className="flex flex-col items-center mb-4">
        <img src={`../assets/${item.brewery || item.company}.png`} alt={item.brewery} className="w-32 h-auto mb-2" />
        <h1 className="text-2xl mb-2 text-white font-bold">{item.name[language]}</h1>
        <img src={`../assets/${item.imageName}`} alt={item.name[language]} className="w-48 h-48 object-cover mx-auto mb-4" />
        <h2 className="text-xl mb-2 text-white font-bold">{details.brewery[language]}</h2>
        <p className="text-white font-bold">{details[language]}</p>
      </div>
    </div>
  );
};

export default ItemDetails;


