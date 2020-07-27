import styled from 'styled-components';

export const Container = styled.div`
  color: #665360;
  background: #232119;
  border-radius: 10px;
  border: 2px solid #232119;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #665360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
