import styled, { css } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

const StyledH1 = styled.h1`
  font-size: 30px;
  font-weight: bold;
  background-color: var(--color-brand-100);
  color: var(--color-brand-900);
`;

const Button = styled.button`
  ${(props) =>
    props.isPrimary
      ? css`
          background-color: var(--color-brand-500);
          color: white;
          &:hover {
            background-color: var(--color-brand-600);
          }
          &:disabled {
            background-color: var(--color-grey-300);
            color: var(--color-grey-500);
          }
        `
      : css`
          background-color: transparent;
          color: var(--color-brand-500);
          border: 2px solid var(--color-brand-500);
          &:hover {
            background-color: var(--color-brand-100);
          }
          &:disabled {
            border-color: var(--color-grey-300);
            color: var(--color-grey-300);
          }
        `}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledH1>Hello world</StyledH1>
      <Button isPrimary={true}>Click me</Button>
    </>
  );
}

export default App;
