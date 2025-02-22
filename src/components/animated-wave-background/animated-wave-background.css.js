import { css } from 'lit';

/**
 * CSS styles for the animated wave background component.
 */
export default css`
  :host {
    display: block;
    height: 100%;
    left: 0;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .animated-wave {
    background-color: #e9e5e2;
    box-sizing: border-box;
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  @media (prefers-color-scheme: dark) {
    .animated-wave {
      background-color: #000000;
    }
  }
`;
