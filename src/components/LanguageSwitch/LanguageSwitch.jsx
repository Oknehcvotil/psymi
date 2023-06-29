import { EnBtn, LanguageCont, UaBtn } from './LanguageSwitch.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from 'redux/languageSlice/selector';
import { setLanguage } from 'redux/languageSlice/languageSlice';

const LanguageSwitch = () => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  const handleLanguageChange = selectedLanguage => {
    dispatch(setLanguage(selectedLanguage));
  };

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
