import { css } from 'lit';

export default css`
  label {
    display: block;
    text-align: left;
    font-weight: bold;
  }

  .input-text {
    margin-top: 8px;
    padding: 8px;
    box-sizing: border-box;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
  }

  .input-text.error {
    border-color: red;
    background-color: #ffcdd2;
  }

  .error-message {
    color: #990000;
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 0;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    height: 24px;
  }

  @media (prefers-color-scheme: dark) {
    .error-message {
      color: #f16f6f;
    }
  }

  .error-message--visible {
    visibility: visible;
    opacity: 1;
  }
`;
