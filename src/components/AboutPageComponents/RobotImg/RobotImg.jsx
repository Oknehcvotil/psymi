import robotImg from '../../../images/aboutPage/robot.png';
import AboutSvgSelector from '../AboutSvgSelector';
import { Circle, ImgCont, ImgMiCont, ImgRobot } from './RobotImg.styled';

const RobotImg = () => {
  return (
    <ImgCont>
      <Circle />
      <ImgRobot src={robotImg} alt="Logo" />
      <ImgMiCont>
        <AboutSvgSelector id="mi" />
      </ImgMiCont>
      <AboutSvgSelector id="shadow" />
    </ImgCont>
  );
};

export default RobotImg;
