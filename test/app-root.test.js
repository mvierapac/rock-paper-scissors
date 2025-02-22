import { beforeEach, describe, expect, test } from 'vitest';

import { Router } from '@vaadin/router';

import '../src/app-root.js';

describe('AppRoot', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('app-root');
    document.body.appendChild(element);
  });

  test('should render the animated wave background', () => {
    const waveBackground = element.shadowRoot.querySelector('animated-wave-background');
    expect(waveBackground).not.toBeNull(); // Verify than element exists
  });

  test('should navigate to the home view on "/"', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const router = new Router(container);
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/game', component: 'game-view' },
      { path: '(.*)', redirect: '/' },
    ]);

    // Navega a la ruta "/"
    router.render('/');
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Verifica que el componente correcto se renderizó
    expect(container.querySelector('home-view')).not.toBeNull();

    document.body.removeChild(container);
  });

  test('should block navigation to /game if name is empty', async () => {
    await element.updateComplete;

    element.router.render('/game');

    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(element.router.location.pathname).toBe('/');
  });

  test('should navigate to /game if name is provided', async () => {
    element.name = 'John Doe';
    await element.updateComplete;

    element.router.render('/game');
    await new Promise((resolve) => setTimeout(resolve, 100));

    expect(element.router.location.pathname).toBe('/game');
  });

  test('should redirect to home when an unknown route is accessed', async () => {
    await element.updateComplete;
    const router = element.router;

    router.render('/unknown');

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(router.location.pathname).toBe('/');
  });
});
