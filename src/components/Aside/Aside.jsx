import LanguageSwitch from 'components/LanguageSwitch';
import Menu from 'components/Menu';
import SocialMedia from 'components/SocialMedia';
import UserSmallIterface from 'components/UserSmallIterface';
import { AsideCont, Underline } from './Aside.styled';

const Aside = () => {
  return (
    <AsideCont>
      <UserSmallIterface />
      <Underline />
      <Menu />
      <LanguageSwitch />
      <SocialMedia />
    </AsideCont>
  );
};

export default Aside;
