import { beforeEach, describe, expect, test, vi } from 'vitest';

import '@views/home/home-view.js';

describe('HomeView', () => {
  let element;

  beforeEach(async () => {
    element = document.createElement('home-view');
    document.body.appendChild(element);
    await element.updateComplete;
  });

  test('renders an input and a button', () => {
    const input = element.shadowRoot.querySelector('input-text');
    const button = element.shadowRoot.querySelector('btn-action');

    expect(input).to.exist;
    expect(button).to.exist;
    expect(button.getAttribute('text')).to.equal(element.t('homeView.start'));
  });

  test('updates playerName when input-text emits input-text event', async () => {
    const input = element.shadowRoot.querySelector('input-text');
    input.dispatchEvent(new CustomEvent('input-text', { detail: { value: 'John' }, bubbles: true, composed: true }));

    await element.updateComplete;

    expect(element.playerName).to.equal('John');
  });

  test('shows error when trying to start with short playerName', async () => {
    const input = element.shadowRoot.querySelector('#playerNameInput');
    const setErrorSpy = vi.spyOn(input, 'setError');

    element.playerName = 'Jo';
    element.handleStartGame();

    expect(setErrorSpy).toHaveBeenCalledWith(element.t('homeView.errorMessage'));
  });
});
