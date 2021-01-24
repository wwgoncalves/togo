import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  footer {
    position: absolute;
    top: 80px;
    left: 10px;
    z-index: 2;

    button {
      width: 30px;
      height: 30px;
      box-sizing: content-box;
      border: 2px solid #0003;
      border-radius: 4px;
      background-color: #fff;
      background-clip: padding-box;
      color: #6060f0;
      font-weight: 700;

      transition: background-color 0.2s;

      &:hover {
        background-color: #6060f0;
        color: #fff;
      }
    }
  }
`;
