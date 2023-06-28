import NavLink from 'components/NavLink';
import { MenuCont, MenuTitle, MenuList } from './Menu.styled';

const Menu = () => {
  return (
    <MenuCont>
      <MenuTitle>Відкрийте себе</MenuTitle>
      <nav>
        <MenuList>
          <li>
            <NavLink path={'/'} svgId="house">
              {'Про проєкт'}
            </NavLink>
          </li>
          <li>
            <NavLink path={'/tests'} svgId="get-tested">
              {'Пройти тестування'}
            </NavLink>
          </li>
          <li>
            <NavLink path={'/articles'} svgId="our-articles">
              {'Наші статті'}
            </NavLink>
          </li>
        </MenuList>
      </nav>
    </MenuCont>
  );
};

export default Menu;
