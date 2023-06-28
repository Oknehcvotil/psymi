import SvgSelector from 'components/SvgSelector';
import { SocLink, SocList } from './SocialMedia.styled';

const SocialMedia = () => {
  return (
    <SocList>
      <li>
        <SocLink
          to="https://www.instagram.com/mi___agency/"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <SvgSelector id={'inst'} />
        </SocLink>
      </li>

      <li>
        <SocLink
          to="https://t.me/mi_agency"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <SvgSelector id={'tg'} />
        </SocLink>
      </li>

      <li>
        <SocLink
          to="https://www.facebook.com/HRmiagency"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <SvgSelector id={'fb'} />
        </SocLink>
      </li>

      <li>
        <SocLink
          to="https://www.linkedin.com/"
          target="_blank"
          rel="noopener nofollow noreferrer"
        >
          <SvgSelector id={'linkedin'} />
        </SocLink>
      </li>
    </SocList>
  );
};

export default SocialMedia;
