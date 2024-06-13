import React, { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('description'); // default tab is description
  const details = getDetails(item.category, item.id);
  if (!details) return null;

  const { en, sr, ru, brewery, price, aboutBrewery, logoImageName, beerLabelImageName } = details;
  const description = details[language];
  const breweryInfo = brewery[language];
  const aboutBreweryInfo = aboutBrewery[language];

  return (
    <div className="text-center relative">
      <div className="flex flex-col items-center mb-4">
        <img src={require(`../assets/${logoImageName}`)} alt={item.brewery} className="w-32 h-auto mb-2" />
        <h1 className="text-2xl mb-2 text-white font-bold">{item.name[language]}</h1>
        <img src={require(`../assets/${beerLabelImageName}`)} alt={item.name[language]} className="w-48 h-48 object-cover mx-auto mb-4" />
        <h2 className="text-xl mb-2 text-white font-bold">{breweryInfo}</h2>
        <div className="text-lg text-white font-bold mb-4">{price} €</div>
        <div className="flex justify-center mb-4">
          <button
            onClick={() => setActiveTab('description')}
            className={`p-2 ${activeTab === 'description' ? 'bg-blue-500' : 'bg-gray-500'} text-white rounded-l`}
          >
            Opis Piva
          </button>
          <button
            onClick={() => setActiveTab('brewery')}
            className={`p-2 ${activeTab === 'brewery' ? 'bg-blue-500' : 'bg-gray-500'} text-white rounded-r`}
          >
            O Pivari
          </button>
        </div>
        <div className="p-4 bg-transparent rounded-lg">
          {activeTab === 'description' ? (
            <>
              <h3 className="text-lg font-bold mb-2 text-white">Opis Piva</h3>
              <div className="text-white">{description}</div>
            </>
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2 text-white">O Pivari</h3>
              <div className="text-white">{aboutBreweryInfo}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;




