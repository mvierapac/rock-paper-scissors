import { beforeEach, describe, expect, test } from 'vitest';

import '../../../src/views/home/home-view.js';

describe('HomeView', () => {
  let element;

  beforeEach(() => {
    // Create the element
    element = document.createElement('home-view');
    document.body.appendChild(element);
  });

  test('renders a title', () => {
    const title = element.shadowRoot.querySelector('h1');
    expect(title).to.exist;
    expect(title.textContent).to.equal(element.t('homeView.title'));
  });

  test('renders a start button', () => {
    const button = element.shadowRoot.querySelector('btn-action');
    expect(button).to.exist;
    expect(button.getAttribute('text')).to.equal(element.t('homeView.start'));
  });
});
