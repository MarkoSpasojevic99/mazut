import React, { useEffect, useState } from 'react';
// odvoj ovaj objekat u zaseban fajl i importuj ga
const itemDetails = {
  1: { 
    en: 'Delicious Petrus beer.', 
    sr: 'Ukusno Petrus pivo.', 
    ru: 'Вкусное пиво Petrus.', 
    brewery: { en: 'Petrus Brewery', sr: 'Pivara Petrus', ru: 'Пивоварня Петрус' }
  },
  2: { 
    en: 'Delicious Petrus beer.', 
    sr: 'Ukusno Petrus pivo.', 
    ru: 'Вкусное пиво Petrus.', 
    brewery: { en: 'Petrus Brewery', sr: 'Pivara Petrus', ru: 'Пивоварня Петрус' }
  },
  3: { 
    en: 'Delicious Schneider Weisse beer.', 
    sr: 'Ukusno Schneider Weisse pivo.', 
    ru: 'Вкусное пиво Schneider Weisse.', 
    brewery: { en: 'Schneider Weisse Brewery', sr: 'Pivara Schneider Weisse', ru: 'Пивоварня Шнайдер Вайсс' }
  },
  // Dodajte ostale piva sa opisima i informacijama o pivari
};

const ItemDetails = ({ item, language }) => {
  // nema potrebe koristiti useState za slike, niti useEffect niti asinhroni kod
  // slike su ti staticke u istom projektu, ne stizu sa nekog API-ja
  // samo ubaci putanju do slike uz ostatak koda image: { src: "putanja do slike"}
  // uradi to u celom projektu, pa cemo onda gledati dalje
  const [itemImage, setItemImage] = useState(null);
  const [breweryLogo, setBreweryLogo] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      const image = await import(`../assets/${item.imageName}`);
      setItemImage(image.default);
    };

    const loadBreweryLogo = async () => {
      const logo = await import(`../assets/${item.brewery || item.company}.png`);
      setBreweryLogo(logo.default);
    };

    loadImage();
    loadBreweryLogo();
  }, [item.imageName, item.brewery, item.company]);

  return (
    <div className="text-center relative">
      <div className="flex flex-col items-center mb-4">
        <img src={breweryLogo} alt={item.brewery} className="w-32 h-auto mb-2" />
        <h1 className="text-2xl mb-2 text-white font-bold">{item.name[language]}</h1>
        <img src={itemImage} alt={item.name[language]} className="w-48 h-48 object-cover mx-auto mb-4" />
        <h2 className="text-xl mb-2 text-white font-bold">{itemDetails[item.id].brewery[language]}</h2>
        <p className="text-white font-bold">{itemDetails[item.id][language]}</p>
      </div>
    </div>
  );
};

export default ItemDetails;

