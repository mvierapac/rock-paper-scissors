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
    border-color: var(--clr-red-500);
    background-color: var(--clr-red-300);
  }

  .error-message {
    color: var(--text-error);
    font-size: 14px;
    margin-top: 4px;
    margin-bottom: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    height: 24px;
  }

  .error-message--visible {
    opacity: 1;
  }
`;
