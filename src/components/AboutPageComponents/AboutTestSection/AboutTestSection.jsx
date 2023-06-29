import {
  AboutTestsCont,
  TitleAbout,
  TestList,
  TestItem,
  ImgCont,
} from './AboutTestSection.styled';
import { nanoid } from 'nanoid';
import { testInfo } from './testSpeciality';
import MainButton from 'components/MainButton/MainButton';

const AboutTestSection = () => {
  return (
    <AboutTestsCont>
      <TitleAbout>Для кого створена ця платформа?</TitleAbout>
      <TestList>
        {testInfo.map(({ img, name, transfer }) => {
          const id = nanoid();
          return (
            <TestItem key={id}>
              <ImgCont>
                <img src={img} alt={img} />
              </ImgCont>
              <p className="test-item-text">{name}</p>
              {transfer && <p className="test-item-text">{transfer}</p>}
            </TestItem>
          );
        })}
      </TestList>
      <MainButton name={'about-page-btn'} path={'/tests'}>
        {'Пройти тестування '}
      </MainButton>
    </AboutTestsCont>
  );
};

export default AboutTestSection;
