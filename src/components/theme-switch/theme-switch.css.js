import { css } from 'lit';

export default css`
  :host {
    display: inline-block;
  }

  .md-icon {
    font-family: 'Material Icons';
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    width: 60px;
    height: 34px;
    background: var(--switch-bg, #ccc);
    border-radius: 50px;
    padding: 4px;
    transition: background 0.3s ease-in-out;
  }

  .slider {
    position: absolute;
    left: 4px;
    top: 6px;
    width: 26px;
    height: 26px;
    background: var(--slider-bg, white);
    border-radius: 50%;
    transition: transform 0.3s ease-in-out;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  input {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  input:focus-visible + .switch {
    outline: 2px solid #007bff;
    outline-offset: 4px;
    border-radius: 50px;
  }

  .icons {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 6px;
    font-size: 20px;
    user-select: none;
  }

  /* 🔥 Modo oscuro */
  :host([theme='dark']) .switch {
    --switch-bg: #444;
  }

  :host([theme='dark']) .slider {
    --slider-bg: #ffcc00;
    transform: translateX(28px);
  }
`;
