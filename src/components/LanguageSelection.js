import React from 'react';

const languages = [
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'sr', name: 'Serbian', flag: '🇷🇸' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
];

const LanguageSelection = ({ setLanguage }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl mb-4">Select Language</h1>
        <div className="flex justify-center space-x-4">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setLanguage(lang.code)}
              className="text-4xl"
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
