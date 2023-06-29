import RobotImg from '../RobotImg';
import { TextCont, RobotCont, RobotTitle } from './RobotSection.styled';

const RobotSection = () => {
  return (
    <RobotCont>
      <RobotImg />
      <TextCont>
        <RobotTitle>Привіт!</RobotTitle>
        <p className="paragrath">
          Я твій персональний асистент на платформі, яка допоможе тобі дізнатися
          більше про свої психологічні особливості та скласти психологічний
          портрет.
        </p>
        <p className="paragrath">
          <strong>Всі тести перевірені,</strong> мають релевантні результати та{' '}
          <br />
          неодноразово випробовані
        </p>
      </TextCont>
    </RobotCont>
  );
};

export default RobotSection;
