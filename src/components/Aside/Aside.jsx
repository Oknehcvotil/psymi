import Menu from 'components/Menu';
import UserSmallIterface from 'components/UserSmallIterface';
import { AsideCont, Underline } from './Aside.styled';

const Aside = () => {
  return (
    <AsideCont>
      <UserSmallIterface />
      <Underline />
      <Menu />
      <nav></nav>
    </AsideCont>
  );
};

export default Aside;
