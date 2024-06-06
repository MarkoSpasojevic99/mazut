import React, { useEffect, useState } from 'react';

const items = {
  beer: [
    { id: 1, name: { en: 'PETRUS CHERRY CHOCOLATE NITRO QUAD', sr: 'PETRUS CHERRY CHOCOLATE NITRO QUAD', ru: 'Петрус Черри Шоколад Нитро Квад' }, brewery: 'petrus', imageName: 'PETRUS CHERRY CHOCOLATE NITRO QUAD.png' },
    { id: 2, name: { en: 'Petrus RED', sr: 'Petrus RED', ru: 'Петрус РЕД' }, brewery: 'petrus', imageName: 'Petrus RED.png' },
    { id: 3, name: { en: 'schneider weisse tap 5', sr: 'schneider weisse tap 5', ru: 'Шнайдер Вайсс тап 5' }, brewery: 'schneider weisse', imageName: 'schneider weisse tap 5.png' },
    { id: 4, name: { en: 'schneider weisse tap 7', sr: 'schneider weisse tap 7', ru: 'Шнайдер Вайсс тап 7' }, brewery: 'schneider weisse', imageName: 'schneider weisse tap 7.png' },
    { id: 5, name: { en: 'cocoa wonderland', sr: 'cocoa wonderland', ru: 'Какао Вондерленд' }, brewery: 'thornbridge', imageName: 'cocoa wonderland.png' },
    { id: 6, name: { en: 'organic cherry', sr: 'organic cherry', ru: 'Органическая вишня' }, brewery: 'samuel smiths', imageName: 'organic cherry.png' },
    { id: 7, name: { en: 'organic raspberry', sr: 'organic raspberry', ru: 'Органическая малина' }, brewery: 'samuel smiths', imageName: 'organic raspberry.png' },
    { id: 8, name: { en: 'ayinger lager hell', sr: 'ayinger lager hell', ru: 'Айингер Лагер Хелл' }, brewery: 'ayinger', imageName: 'ayinger lager hell.png' },
    { id: 9, name: { en: 'Punk IPA', sr: 'Punk IPA', ru: 'Панк ИПА' }, brewery: 'brewdog', imageName: 'Punk IPA.png' },
    { id: 10, name: { en: 'Benediktiner Weissbier', sr: 'Benediktiner Weissbier', ru: 'Бенедиктинер Вайссбир' }, brewery: 'benediktiner', imageName: 'Benediktiner Weissbier.png' },
    { id: 11, name: { en: 'Floris Raspberry', sr: 'Floris Raspberry', ru: 'Флорис Малина' }, brewery: 'huyghe', imageName: 'Floris Raspberry.png' },
    { id: 12, name: { en: 'Delirium tremens', sr: 'Delirium tremens', ru: 'Делириум Тременс' }, brewery: 'huyghe', imageName: 'Delirium tremens.png' },
    { id: 13, name: { en: 'Bleue brune forte', sr: 'Bleue brune forte', ru: 'Блеу Брюн Форте' }, brewery: 'chimay', imageName: 'Bleue brune forte.png' },
    { id: 14, name: { en: 'gulden draak', sr: 'gulden draak', ru: 'Гулден Драак' }, brewery: 'brouwerij van steenberge', imageName: 'gulden draak.png' },
    { id: 15, name: { en: 'matador', sr: 'matador', ru: 'Матадор' }, brewery: 'tron', imageName: 'matador.png' },
    { id: 16, name: { en: 'scorpio', sr: 'scorpio', ru: 'Скорпион' }, brewery: 'tron', imageName: 'scorpio.png' },
    { id: 17, name: { en: 'Steroid', sr: 'Steroid', ru: 'Стероид' }, brewery: 'carstvo piva', imageName: 'Steroid.png' },
    { id: 18, name: { en: 'Raspberry Mint Sour', sr: 'Raspberry Mint Sour', ru: 'Малиново-мятный кислый' }, brewery: 'dogma', imageName: 'Raspberry Mint Sour.png' },
    { id: 19, name: { en: 'trapist 8', sr: 'trapist 8', ru: 'трапист 8' }, brewery: 'abbaye notre-dame de saint-remy', imageName: 'trapist 8.png' },
  ],
  cider: [
    { id: 20, name: { en: 'Cidre du patron', sr: 'Cidre du patron', ru: 'Сидр дю Патрон' }, company: 'Le Coq Toqué', imageName: 'Cidre du patron.png' },
    { id: 21, name: { en: 'Dan Kelly\'s Original', sr: 'Dan Kelly\'s Original', ru: 'Оригинальный Дан Келли' }, company: 'dan kellys', imageName: 'Dan Kellys Original.png' },
    { id: 22, name: { en: '200', sr: '200', ru: '200' }, company: 'sheppys', imageName: '200.png' },
  ],
};

const ItemSelection = ({ setItem, category, language }) => {
  const [itemImages, setItemImages] = useState({});

  useEffect(() => {
    const importImages = async () => {
      const images = {};
      for (const item of items[category]) {
        const image = await import(`../assets/${item.imageName}`);
        images[item.id] = image.default;
      }
      setItemImages(images);
    };

    importImages();
  }, [category]);

  return (
    <div className="text-center">
      <h1 className="text-2xl mb-4 text-white font-bold">Select Item</h1>
      <div className="flex flex-col items-center space-y-4">
        {items[category].map((item) => (
          <div key={item.id} onClick={() => setItem(item)} className="cursor-pointer">
            <img 
              src={itemImages[item.id]} 
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


