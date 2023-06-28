// import SvgSelector from 'components/SvgSelector';
import { IconCont, Link } from './NavLink.styled';

import SvgSelector from 'components/SvgSelector';

const NavLink = ({ path, svgId, children }) => {
  return (
    <>
      <Link to={path}>
        <IconCont className="icon-cont">
          <SvgSelector id={svgId} />
        </IconCont>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
