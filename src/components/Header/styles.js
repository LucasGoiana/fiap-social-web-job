import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

export const Container = styled.header`
    height: 80px;
    padding: 0px 14px;
    background-color: var(--bgSecondary);

    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    width: 100vw;

    box-shadow: 0px 0px 10px #ED145B99;

    > div {
        display: flex;
        align-items: center;
        gap: 5px;

        p {
            font-size: 18px;
            font-weight: bold;
        }
      
    }
  img {
    width: 60px;
  }
  a{
    color:white;
    border-left: 3px solid var(--primary);
    padding-left: 10px;
  }
`;

export const IconSignOut = styled(FaSignOutAlt)`
    font-size: 35px;
    color: var(--primary);

    transition: .2s;

    :active{
        transform: scale(0.9) rotate(360deg);
    }
`;