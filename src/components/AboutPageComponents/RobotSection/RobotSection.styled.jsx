import styled from '@emotion/styled';

export const RobotCont = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
`;

export const TextCont = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: inline-block;
  max-width: 570px;
  width: 100%;
  min-height: 134px;
  border-radius: 15px;
  background-color: #f2f5f8;
  padding: 19px 31px;
  font-family: 'Montserrat', sans-serif;

  ::before {
    content: '';
    position: absolute;
    border-width: 2px;
    inset: calc(calc(0px - 2px));
    z-index: -1;
    padding: 2px;
    border-radius: inherit;
    background: linear-gradient(136deg, #347aec 0%, #6764e7 100%);
  }

  .paragrath {
    color: rgba(38, 38, 38, 1);
    font-size: 16px;
    line-height: 130%;

    :not(:last-child) {
      margin-bottom: 6px;
    }
  }
`;

export const RobotTitle = styled.h2`
  color: #4485ed;
  font-size: 16px;
  font-family: 'Unbounded', cursive;
  font-weight: 500;
  font-style: normal;
  line-height: 130%;
  margin-bottom: 6px;
`;
