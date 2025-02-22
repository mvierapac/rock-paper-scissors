import { beforeEach, describe, expect, vi, test } from 'vitest';

// Views
import '@views/game/game-view.js';

// Components
import '@components/btn-action/btn-action.js';

describe('GameView', () => {
  let element;

  beforeEach(() => {
    // Create the element
    localStorage.setItem('playerName', 'TestPlayer');
    element = document.createElement('game-view');
    document.body.appendChild(element);
  });

  test('should render the component', () => {
    expect(element).to.exist;
  });

  test('should initialize with default properties', () => {
    expect(element.playerName).toEqual('TestPlayer');
    expect(element.points).to.equal(0);
    expect(element.playerChoice).to.equal('');
    expect(element.computerChoice).to.equal('');
  });

  test('should display the welcome message', () => {
    const welcomeMessage = element.shadowRoot.querySelector('.welcome');
    expect(welcomeMessage.textContent).to.include('Welcome');
  });

  test('should handle player choice', async () => {
    const rockButton = element.shadowRoot.querySelector('game-choice-button[choice="rock"]');
    rockButton.dispatchEvent(new Event('choice-button'));
    await element.updateComplete;

    expect(element.playerChoice).to.equal('rock');
    expect(element.choiceMessage).to.include('You: rock');
  });

  test('should call exitGame when removed', () => {
    const exitGameSpy = vi.spyOn(element, 'exitGame');
    document.body.removeChild(element);

    expect(exitGameSpy).toHaveBeenCalled();
  });

  test('should update winnerMessage when determineWinner is called', () => {
    element.playerChoice = 'rock';
    element.computerChoice = 'scissors';
    element.determineWinner();

    expect(element.winnerMessage).to.include('win');
  });
});
