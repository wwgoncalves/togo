import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  position: absolute;
  bottom: 20px;
  left: 50px;

  z-index: 1;
  padding: 10px 0;
  padding-left: 20px;

  background: #fffa;
  border-radius: 20px;

  max-height: 400px;

  div {
    max-height: 300px;
    overflow-y: auto;
    margin-right: 10px;
    padding-right: 20px;
  }

  h3 {
    margin-bottom: 10px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #6060f0;
  }

  ul {
    li {
      display: flex;
      font-size: 12px;
      justify-content: space-between;
      align-items: center;
      color: #222;

      span {
        flex: 1;
      }

      span + span {
        flex: 2;
        text-align: justify;

        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }

    li + li {
      margin-top: 5px;
    }

    li:nth-child(even) {
      font-weight: 700;
    }
  }

  @media (max-width: 425px), (max-height: 450px) and (orientation: landscape) {
    max-width: 45vw;
    max-height: 90vh;
    bottom: 0;
    left: 50px;
    overflow-y: hidden;

    div {
      max-height: 70vh;
      overflow-y: scroll;
    }
  }

  @media (max-width: 425px) and (orientation: portrait) {
    max-width: 95vw;
    max-height: 50vh;
    left: unset;
    top: 0;
    right: 0;
    bottom: unset;

    div {
      max-height: 30vh;
    }
  }
`;
