import React, { } from 'react';
import styled from 'styled-components';
const ButtonBase = styled.button`
   padding: 10px 20px;
   border-radius: 5px;
   color: white;
   cursor: pointer;
   margin: 10px;
   &:hover {
     color: red;
   }
`;

const BlueButton = styled(ButtonBase)`
   background-color: blue;
   border-radius: 20px;
`;
const FailButton = styled(ButtonBase)`
   background-color: red;
`;
const TextButton = styled(ButtonBase)`
   background-color: transparent;
   color: blue;
`;
const App: React.FC = () => {
  return (
    <>
       <BlueButton>普通按钮</BlueButton>
       <FailButton>失败按钮</FailButton>
       <TextButton>文字按钮</TextButton>
    </>
  );
}

export default App;