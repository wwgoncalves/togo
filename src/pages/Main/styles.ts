import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  form.landing-page-form {
    width: 350px;

    background: #fffa;
    border-radius: 20px;

    padding: 10px 20px;

    position: absolute;
    top: 10px;
    left: 50px;

    z-index: 1;
  }

  .leaflet-container {
    z-index: 0;
  }

  form.landing-page-form fieldset {
    border: 0;
  }

  form.landing-page-form fieldset legend {
    width: 100%;
    margin-bottom: 10px;

    text-align: center;
    font-size: 32px;
    line-height: 34px;
    font-weight: 700;
    color: #6060f0;
  }

  form.landing-page-form .input-block + .input-block {
    margin-top: 15px;
  }

  form.landing-page-form .input-block label {
    display: flex;
    color: #6060f0;
    margin-bottom: 5px;
    line-height: 24px;
  }

  form.landing-page-form .input-block input {
    width: 100%;
    height: 44px;
    padding: 0 16px;

    background: #fffa;
    border: 1px solid #6060f0;
    border-radius: 20px;
    outline: none;
    color: #333;

    ::placeholder {
      color: #ccc;
    }
  }

  form.landing-page-form button.confirm-button {
    width: 100%;
    height: 50px;
    margin-top: 34px;

    background-color: #6060f0;
    border: 0;
    border-radius: 20px;
    color: #fff;
    font-weight: 700;

    transition: background-color 0.2s;
  }

  form.landing-page-form button.confirm-button:hover {
    background-color: #6060f0dd;
  }

  /* Marked location pop-up */
  .map-popup .leaflet-popup-content-wrapper {
    background: #fffe;
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content h3 {
    margin: 8px 12px;
    color: #6060f0;
    font-size: 20px;
    font-weight: bold;
  }

  .map-popup .leaflet-popup-content p {
    margin: 8px 12px;
    line-height: 15px;
    color: #333;
    font-size: 12px;
    font-weight: bold;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
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
`;
