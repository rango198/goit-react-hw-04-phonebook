import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  gap: 15px;
`;

export const BtnItem = styled.button`
  border: none;
  border-radius: 15px;
  cursor: pointer;
  background-color: #42b9b9;
  margin-left: 5px;
  transition: background-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  :hover {
    background-color: #999;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 6px;
`;
