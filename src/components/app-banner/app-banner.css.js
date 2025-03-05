import { css } from 'lit';

export default css`
  :host,
  .header-app {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 4rem;
    transition: transform 300ms;
  }

  .logo:hover {
    transform: scale(1.1);
  }
`;
