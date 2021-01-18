import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  form.landing-page-form {
    width: 400px;

    background: #fffa;
    border: 1px solid #d3e2e5;
    border-radius: 30px;

    padding: 20px 40px;

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

    font-size: 32px;
    line-height: 34px;
    color: #6060f0;
    font-weight: 700;

    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 5px;
    padding-bottom: 5px;
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

  form.landing-page-form .input-block label span {
    font-size: 14px;
    color: #8fa7b3;
    margin-left: 24px;
    line-height: 24px;
  }

  form.landing-page-form .input-block input {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #333;
  }

  form.landing-page-form .input-block input {
    height: 44px;
    padding: 0 16px;

    ::placeholder {
      color: #ccc;
    }
  }

  form.landing-page-form button.confirm-button {
    margin-top: 34px;

    width: 100%;
    height: 50px;
    border: 0;
    cursor: pointer;
    background-color: #6060f0;
    border-radius: 20px;
    color: #ffffff;
    font-weight: 800;

    transition: background-color 0.2s;
  }

  form.landing-page-form button.confirm-button:hover {
    background-color: #6060f0dd;
  }

  /* Marked location pop-up */
  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content h3 {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;
  }

  .map-popup .leaflet-popup-content p {
    color: #042f38;
    font-size: 12px;
    font-weight: bold;
    margin: 8px 12px;
    line-height: 15px;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }

  /* React Select classes */
  .filter__control {
    border-radius: 20px !important;

    width: 100% !important;
    background: #f5f8fa !important;
    border: 1px solid #d3e2e5 !important;
    border-radius: 20px !important;
    outline: none !important;
    color: #5c8599 !important;
  }

  .filter__placeholder {
    color: #ccc !important;
  }

  .filter__option {
    background: #f5f8fa !important;
    color: #5c8599 !important;
  }

  .filter__option--is-focused {
    background: #d3e2e5 !important;
    color: #010101 !important;
  }
`;
