import LanguageSwitch from 'components/LanguageSwitch';
import Menu from 'components/Menu';
import SocialMedia from 'components/SocialMedia';
import UserSmallIterface from 'components/UserSmallIterface';
import { AsideCont } from './Aside.styled';

const Aside = () => {
  return (
    <AsideCont>
      <UserSmallIterface />
      <Menu />
      <LanguageSwitch />
      <SocialMedia />
    </AsideCont>
  );
};

export default Aside;
