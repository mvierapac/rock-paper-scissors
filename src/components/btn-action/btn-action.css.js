import { css } from 'lit';

export default css`
  .btn-game {
    background-color: var(--clr-blue-500);
    border-radius: 0.5rem;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem 1.5rem;
    transition: background-color 0.3s;
  }

  .btn-game:hover {
    background-color: var(--clr-blue-600);
  }

  .btn-game:focus-visible {
    outline: 2px solid var(--clr-orange-500);
    outline-offset: 1px;
  }
`;
