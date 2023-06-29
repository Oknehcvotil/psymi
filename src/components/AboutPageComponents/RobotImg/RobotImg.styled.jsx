import styled from '@emotion/styled';

export const ImgCont = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 240px;
`;

export const ImgRobot = styled.img`
  margin-bottom: 15px;
  position: relative;
  z-index: 3;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 133.957px;
  height: 133.957px;
  border-radius: 50%;
  background: linear-gradient(136deg, #347aec 0%, #6764e7 100%);
`;

export const ImgMiCont = styled.div`
  position: absolute;
  z-index: 7;
  top: 53%;
  left: 48%;
  transform: translate(-50%, -50%);
`;
