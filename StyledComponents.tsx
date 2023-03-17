import styled from 'styled-components';

export const Page = styled.div`
  display:flex;
  width:50%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe5b4;
  padding: 20px;
  font-size: 24px;
  line-height: 1.5;
`;

export const HorizontalText = styled.span`
  writing-mode: horizontal-tb;
  text-orientation: mixed;
`;
