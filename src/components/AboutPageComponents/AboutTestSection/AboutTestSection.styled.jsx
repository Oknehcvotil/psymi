import styled from '@emotion/styled';

export const AboutTestsCont = styled.section`
  padding-top: 30px;
`;

export const TitleAbout = styled.h1`
  color: #262626;
  font-size: 22px;
  font-family: 'Unbounded', cursive;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

export const TestList = styled.ul`
  max-width: 670px;
  display: flex;
  justify-content: space-between;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

export const TestItem = styled.li`
  width: 162px;
  height: 94px;
  padding: 13px 13px 13px 15px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: linear-gradient(136deg, #347aec 0%, #6764e7 100%);

  .test-item-text {
    color: #fff;
    font-size: 12px;
    font-family: 'Unbounded', cursive;
    font-weight: 400;
    line-height: 130%;
    width: 149px;
  }
`;

export const ImgCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  background-color: rgba(242, 245, 248, 1);
  margin-bottom: 19px;
`;
