import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  footer {
    position: absolute;
    bottom: 20px;
    left: 0;
    z-index: 2;

    button {
      padding: 5px 5px;
      border: 0;
      border-radius: 50%;
      background-color: #f0f0f0dd;
      color: #6060f0;
      font-weight: 700;

      transition: background-color 0.2s;

      &:hover {
        background-color: #f0f0f077;
      }
    }
  }
`;
