import { css } from 'lit';

export default css`
  .choice-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-gray-200);
    border: 2px solid #000;
    border-radius: 8px;
    padding: 0.5rem;
    width: 100%;
    max-width: 120px;
    height: 120px;
    cursor: pointer;
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }

  .choice-button img {
    width: 80%;
    height: auto;
  }

  .choice-button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  .choice-button:focus {
    border-color: var(--clr-orange-500);
    outline: none;
  }
`;
