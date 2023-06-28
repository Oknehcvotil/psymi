import SvgSelector from 'components/SvgSelector';
import { HeadContainer, Link } from './Head.styled';

const Head = () => {
  return (
    <header>
      <HeadContainer>
        <Link to={`/about`}>
          <SvgSelector id="logo" />
        </Link>
      </HeadContainer>
    </header>
  );
};

export default Head;
