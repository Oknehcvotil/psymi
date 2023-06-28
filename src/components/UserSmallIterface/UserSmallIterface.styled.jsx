import styled from '@emotion/styled';
import { Link as BaseLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  gap: 8px;
  max-width: 186px;
  width: 100%;
  min-height: 67px;
`;

export const UserPhotoCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 67px;
  height: 67px;
  margin-bottom: 28px;
  border-radius: 9px;
  background: linear-gradient(135deg, #347aec 0%, #6764e7 100%);
`;

export const UserInfoCont = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Hello = styled.p`
  color: #5e5e5e;
  font-size: 10px;
  font-family: Montserrat;
  font-weight: 500;
`;

export const UserName = styled.h3`
  color: #262626;
  font-size: 16px;
  font-family: Unbounded;
  margin-bottom: 6px;
`;

export const Link = styled(BaseLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 98px;
  height: 15px;
  border-radius: 8px;
  background-color: #347aec;
  color: #fff;
  font-size: 10px;
  font-family: Montserrat;
  font-weight: 500;
`;
