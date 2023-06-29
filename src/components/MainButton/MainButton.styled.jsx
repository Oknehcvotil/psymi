import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  background: #347aec;
  color: #fff;
  font-size: 18px;
  font-family: Unbounded;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &.about-page-btn {
    width: 247px;
    height: 37px;
  }

  :hover,
  :focus {
    background: #6764e7;
  }
`;
