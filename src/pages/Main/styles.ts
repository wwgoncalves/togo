import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  aside {
    position: absolute;
    top: 80px;
    left: 10px;
    z-index: 2;
    display: flex;
    flex-direction: column;

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
      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;

      &:disabled {
        color: #ccc;
        opacity: 0.7;
      }

      &:hover:not(:disabled),
      &.active {
        background-color: #6060f0;
        color: #fff;
      }

      &.glowing {
        @keyframes glowing {
          from {
            box-shadow: 0px 0px 0px 0px #6060f0;
          }
          to {
            box-shadow: 0px 0px 10px 2px #6060f0;
          }
        }
        animation: glowing 2s ease-in-out infinite;
      }
    }
  }
`;
