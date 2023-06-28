import { EnBtn, LanguageCont, UaBtn } from './LanguageSwitch.styled';
import { useState } from 'react';

const LanguageSwitch = () => {
  const [language, setLanguage] = useState('ua');

  const handleLanguageChange = selectedLanguage => {
    setLanguage(selectedLanguage);
  };

  console.log(language);

  return (
    <LanguageCont>
      <UaBtn
        type="button"
        onClick={() => handleLanguageChange('ua')}
        className={`${language === 'ua' ? 'active' : ''}`}
      />
      <EnBtn
        type="button"
        onClick={() => handleLanguageChange('en')}
        className={`${language === 'en' ? 'active' : ''}`}
      />
    </LanguageCont>
  );
};

export default LanguageSwitch;
