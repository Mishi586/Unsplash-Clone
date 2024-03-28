import styled from 'styled-components';

export const Tab = styled.span`
  font-weight: 500;
  cursor: pointer;
  user-select: none;
  padding: 10px 0;
  position: relative;
  height: 100%;

  color: ${({ isSelected }) => (isSelected ? '#000000' : '#767676')};
  
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    border-bottom: 4px solid ${({ isSelected }) => (isSelected ? '#000000' : 'transparent')};
    bottom: 0;
    left: 0;
  }
`;
