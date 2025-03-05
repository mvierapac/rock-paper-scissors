import { css } from 'lit';

export default css`
  :host,
  .header-app {
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
