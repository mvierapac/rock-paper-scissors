import { beforeEach, describe, expect, vi, test } from 'vitest';

import '@components/input-text/input-text.js';

describe('Input text', () => {
  let element;

  beforeEach(() => {
    element = document.createElement('input-text');
    document.body.appendChild(element);
  });

  test('should initialize with empty text and errorMessage', () => {
    expect(element.text).toBe('');
    expect(element.errorMessage).toBe('');
  });

  test('should update text when input changes', () => {
    const input = element.shadowRoot.querySelector('input');
    input.value = 'New Player Name';
    input.dispatchEvent(new Event('input'));

    expect(element.text).toBe('New Player Name');
  });

  test('should dispatch an event when input changes', () => {
    const input = element.shadowRoot.querySelector('input');
    const eventSpy = vi.fn();
    element.addEventListener('input-text', eventSpy);

    input.value = 'New Player Name';
    input.dispatchEvent(new Event('input'));

    expect(eventSpy).toHaveBeenCalled();
    expect(eventSpy.mock.calls[0][0].detail.value).toBe('New Player Name');
  });

  test('should set an error message', () => {
    element.setError('This field is required');
    expect(element.errorMessage).toBe('This field is required');
  });

  test('should show error message when errorMessage is set', async () => {
    element.setError('This field is required');
    await element.updateComplete;
    const errorMessage = element.shadowRoot.querySelector('.error-message');
    expect(errorMessage.textContent).toBe('This field is required');
    expect(errorMessage.classList.contains('error-message--visible')).toBe(true);
  });

  test('should not show error message when errorMessage is empty', () => {
    element.setError('');
    const errorMessage = element.shadowRoot.querySelector('.error-message');
    expect(errorMessage.textContent).toBe(' ');
    expect(errorMessage.classList.contains('error-message--visible')).toBe(false);
  });

  test('should apply error class when errorMessage is set', async () => {
    element.setError('This field is required');
    await element.updateComplete;
    const input = element.shadowRoot.querySelector('input');
    expect(input.classList.contains('error')).toBe(true);
  });

  test('should remove error class when errorMessage is empty', () => {
    element.setError('');
    const input = element.shadowRoot.querySelector('input');
    expect(input.classList.contains('error')).toBe(false);
  });
});
