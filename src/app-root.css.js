import { css } from 'lit';

export default css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    .app {
      color: #ffffff;
    }
  }

  @media (prefers-color-scheme: light) {
    .app {
      color: #000000;
    }
  }
  .app {
    font-family: Arial, sans-serif;
    height: 100vh;
    position: relative;
  }

  .logo {
    position: absolute;
    width: 4rem;
    transition: transform 300ms;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  a:focus .logo {
    border: 2px solid #ff6347;
    transform: scale(1.1);
    outline: none;
  }

  #game {
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 100vh;
    text-align: center;
  }
`;
