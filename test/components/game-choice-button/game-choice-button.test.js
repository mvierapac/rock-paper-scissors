import { beforeEach, describe, expect, test } from 'vitest';

import '@components/game-choice-button/game-choice-button.js';

describe('Game-choice-button', () => {
  let element;

  beforeEach(() => {
    // Create the element
    element = document.createElement('game-choice-button');
    document.body.appendChild(element);
  });

  test('should return correct imageSrc for rock', () => {
    element.choice = 'rock';
    expect(element.imageSrc).toBe('/images/rock.png');
  });

  test('should return correct imageSrc for paper', () => {
    element.choice = 'paper';
    expect(element.imageSrc).toBe('/images/paper.png');
  });

  test('should return correct imageSrc for scissors', () => {
    element.choice = 'scissors';
    expect(element.imageSrc).toBe('/images/scissors.png');
  });

  test('should return correct ariaLabel for rock', () => {
    element.choice = 'rock';
    expect(element.ariaLabel).toBe('Choose Rock');
  });

  test('should return correct ariaLabel for paper', () => {
    element.choice = 'paper';
    expect(element.ariaLabel).toBe('Choose Paper');
  });

  test('should return correct ariaLabel for scissors', () => {
    element.choice = 'scissors';
    expect(element.ariaLabel).toBe('Choose Scissors');
  });

  test('should return empty string for undefined choice ariaLabel', () => {
    element.choice = '';
    expect(element.ariaLabel).toBe('');
  });

  test('should return correct altText for rock', () => {
    element.choice = 'rock';
    expect(element.altText).toBe('Rock');
  });

  test('should return correct altText for paper', () => {
    element.choice = 'paper';
    expect(element.altText).toBe('Paper');
  });

  test('should return correct altText for scissors', () => {
    element.choice = 'scissors';
    expect(element.altText).toBe('Scissors');
  });

  test('should return empty string for undefined choice altText', () => {
    element.choice = '';
    expect(element.altText).toBe('');
  });
});
