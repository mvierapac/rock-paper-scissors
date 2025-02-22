import { css } from 'lit';

export default css`
  .game-board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin: 1.25rem auto;
  }

  .row-choice-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .game-message {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    height: 24px;
  }

  .game-message--visible {
    visibility: visible;
    opacity: 1;
  }
`;
