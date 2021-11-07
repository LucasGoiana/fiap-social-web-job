import styled from "styled-components";

export const Container = styled.article`
  width: fit-content;
  padding: 2px 10px;
  display: flex;
  align-items: center;

  border-radius: 4px;
  background-color: var(--primary);
  color: var(--textButton);

  margin: 0px 10px 10px 0px;

  > span {
    margin-left: 10px;
    cursor: pointer;
    font-size: 20px;

    :hover {
      color: var(--textPrimary);
    }
  }
`;
