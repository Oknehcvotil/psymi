import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const SocList = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 135px;
  height: 18px;
`;

export const SocLink = styled(Link)`
  :hover,
  :focus {
    rect {
      fill: rgba(103, 100, 231, 1);
    }
  }
`;
