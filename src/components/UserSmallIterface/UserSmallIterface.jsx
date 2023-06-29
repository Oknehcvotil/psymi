import SvgSelector from 'components/SvgSelector';
import {
  Container,
  Greetings,
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
        <Greetings>Привіт,</Greetings>
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
