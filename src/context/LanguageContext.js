import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();


export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = React.useState(null);
  const [languageData, setLanguageData] = React.useState(null);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, languageData, setLanguageData }}>
      {children}
    </LanguageContext.Provider>
  );
};

