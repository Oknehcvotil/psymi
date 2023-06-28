import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  gap: 14px;
  align-items: center;
  color: #262626;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;

  .icon-cont {
    background-color: #f2f5f8;
    transition: background-color 0.3s ease-in-out;

    * {
      stroke: rgba(93, 93, 93, 1);
    }
  }

  &.active {
    .icon-cont {
      background-color: #347aec;
      box-shadow: 0px 0px 5px 0px rgba(52, 122, 236, 0.8);

      * {
        stroke: rgba(255, 255, 255, 1);
      }
    }
  }

  :hover:not(.active),
  :focus:not(.active) {
    .icon-cont {
      background-color: rgba(103, 100, 231, 1);

      * {
        stroke: rgba(255, 255, 255, 1);
      }
    }
  }
`;

export const IconCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 21px;
  height: 21px;
  border-radius: 50%;
`;
