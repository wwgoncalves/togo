import styled from 'styled-components';

export const Container = styled.form`
  width: 300px;
  position: absolute;
  top: 10px;
  left: 50px;
  z-index: 1;
  padding: 10px 20px;

  background: #fffa;
  border-radius: 20px;

  fieldset {
    border: 0;
  }

  fieldset legend {
    width: 100%;
    margin-bottom: 10px;

    text-align: center;
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    color: #6060f0;
  }

  div.input-block + div.input-block {
    margin-top: 15px;
  }

  div.input-block label {
    display: flex;
    color: #6060f0;
    margin-bottom: 5px;
    line-height: 24px;
  }

  div.input-block input {
    width: 100%;
    height: 44px;
    padding: 0 16px;

    background: #fffa;
    border: 1px solid #6060f0;
    border-radius: 20px;
    outline: none;
    color: #333;

    &::placeholder {
      color: #ccc;
    }
  }

  /* React Select classes */
  .filter__control {
    width: 100% !important;
    background: #fffa !important;
    border: 1px solid #6060f0 !important;
    border-radius: 20px !important;
    outline: none !important;
  }

  .filter__control--is-focused {
    box-shadow: none !important;
  }

  .filter__value-container {
    height: 44px !important;
    padding: 0 0px !important;
    cursor: text !important;

    div:nth-child(2),
    div:first-child:not(.filter__placeholder):not(.filter__single-value) {
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
  }

  .filter__placeholder {
    margin-left: 0 !important;
    padding: 0 16px !important;
    color: #ccc !important;
  }

  .filter__input {
    margin-left: 0 !important;
    padding: 0 14px !important;

    input {
      width: 100% !important;
    }
  }

  .filter__single-value {
    margin-left: 0 !important;
    padding: 0 16px !important;
  }

  .filter__option {
    color: #333 !important;
  }

  .filter__option--is-focused {
    background: #6060f0 !important;
    color: #fff !important;
    transform: none !important;
  }

  @media (max-width: 425px), (max-height: 450px) and (orientation: landscape) {
    max-width: 95vw;
    max-height: 100vh;
    left: unset;
    top: unset;
    right: 0;
    bottom: 0;
    padding: 5px 15px;

    fieldset legend {
      margin-bottom: 5px;
      font-size: 24px;
      line-height: unset;
    }

    div.input-block + div.input-block {
      margin-top: 10px;
    }

    div.input-block label {
      font-size: 14px;
      margin-bottom: 2px;
      line-height: unset;
    }

    div.input-block input {
      background: transparent;
      font-size: 14px;
      height: unset;
      border: unset;
      border-radius: unset;
      border-bottom: 1px solid #6060f0aa;

      &::placeholder {
        color: #aaa !important;
      }
    }

    /* React Select classes */
    .filter__control {
      min-height: unset !important;
      height: 20px !important;
      background: transparent !important;
      align-items: unset !important;
      border: unset !important;
      border-radius: unset !important;
      border-bottom: 1px solid #6060f0aa !important;
      font-size: 14px !important;
    }

    .filter__value-container {
      min-height: unset !important;
      height: 20px !important;
      background: transparent !important;
      align-items: unset !important;
      overflow: visible !important;
    }

    .filter__placeholder {
      top: unset !important;
      transform: unset !important;
      color: #aaa !important;
    }

    .filter__indicators {
      height: 20px !important;
    }

    .filter__indicator-separator {
      height: 15px !important;
      margin-top: unset !important;
      margin-bottom: unset !important;
    }

    .filter__indicator {
      height: 20px !important;
      padding: 0 !important;
      margin-left: 4px !important;
      margin-right: 4px !important;
      margin-bottom: 4px !important;
    }

    .filter__menu {
      font-size: 14px !important;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    flex: 1;
    height: 50px;
    margin-top: 34px;
    border: 0;
    border-radius: 20px;
    color: #fff;
    font-weight: 700;

    transition: background-color 0.2s;

    &.reset-button {
      background-color: #c0c0c0;

      &:hover {
        background-color: #c0c0c0dd;
      }
    }

    &.save-button {
      background-color: #6060f0;

      &:hover {
        background-color: #6060f0dd;
      }
    }
  }

  button + button {
    margin-left: 10px;
  }

  @media (max-height: 450px) and (orientation: landscape) {
    button {
      height: 30px;
      margin-top: 20px;
      font-size: 14px;
    }
  }
`;
