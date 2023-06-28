import SvgSelector from 'components/SvgSelector';
import {
  Container,
  Hello,
  Link,
  UserInfoCont,
  UserName,
  UserPhotoCont,
} from './UserSmallIterface.styled';

const UserSmallIterface = () => {
  return (
    <Container>
      <UserPhotoCont>
        <SvgSelector id="userDefault" />
      </UserPhotoCont>
      <UserInfoCont>
        <Hello>Привіт,</Hello>
        <UserName>Анонім</UserName>
        <Link to={`/profile`}>
          Мій профіль
          <SvgSelector id="arrow" />
        </Link>
      </UserInfoCont>
    </Container>
  );
};

export default UserSmallIterface;
