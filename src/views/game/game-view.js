import { LitElement, html } from 'lit';

import { i18nMixin } from '../../mixins/i18n-mixin.js';
import i18n from '../../i18n/i18n.js';

import '@components/game-choice-button/game-choice-button.js';

import { gameRules } from '@constants/game-constants.js';

import gameStyles from './game-view.css.js';

class GameView extends i18nMixin(LitElement) {
  static get styles() {
    return [gameStyles];
  }

  static get properties() {
    return {
      playerName: { type: String },
      points: { type: Number },
      choiceMessage: { type: String },
      winnerMessage: { type: String },
      playerChoice: { type: String },
      computerChoice: { type: String },
      lastComputerChoice: { type: String },
    };
  }

  constructor() {
    super();

    this.playerName = localStorage.getItem('playerName');
    this.playerChoice = '';
    this.points = 0;
    this.computerChoice = '';
    this.lastComputerChoice = '';
    this.choiceMessage = '';
    this.winnerMessage = '';
    this.t = i18n.t;
  }

  connectedCallback() {
    super.connectedCallback();
    const storedPlayers = JSON.parse(localStorage.getItem('players')) || {};

    const storedPlayerName = this.playerName || localStorage.getItem('playerName');
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));

    if (storedPlayerName && storedPlayers[storedPlayerName]) {
      this.playerName = storedPlayerName;
      this.points = storedPlayers[storedPlayerName];
    }
  }

  exitGame() {
    const storedPlayers = JSON.parse(localStorage.getItem('players')) || {};
    storedPlayers[this.playerName] = this.points;
    localStorage.setItem('players', JSON.stringify(storedPlayers));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
    this.exitGame();
  }

  handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this.exitGame();
    }
  }

  handlePlayerChoice(choice) {
    this.winnerMessage = '';
    this.playerChoice = choice;
    this.choiceMessage = `You: ${choice} - Bot:...`;

    setTimeout(() => {
      this.computerChoice = this.getComputerChoice();
      this.lastComputerChoice = this.computerChoice;
      this.choiceMessage = `You: ${this.playerChoice} - Bot: ${this.computerChoice}`;
      this.determineWinner();
    }, 1000);
  }

  getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    const availableChoices = choices.filter((choice) => choice !== this.lastComputerChoice);

    return availableChoices[Math.floor(Math.random() * availableChoices.length)];
  }

  determineWinner() {
    setTimeout(() => {
      if (this.playerChoice === this.computerChoice) {
        this.winnerMessage = this.t('gameView.draw');
      } else if (gameRules[this.playerChoice] === this.computerChoice) {
        this.points += 1;
        this.winnerMessage = this.t('gameView.win');
      } else {
        this.winnerMessage = this.t('gameView.lose');
      }
    }, 1); // for screen reader to read this msg after choice message
  }

  render() {
    return html`
      <div>
        <h3 class="welcome">${this.t('gameView.welcome')} ${this.playerName}</h3>
        <p>${this.t('gameView.points')} ${this.points}</p>
        <div class="row-choice-buttons">
          <game-choice-button
            choice="rock"
            @choice-button=${() => this.handlePlayerChoice('rock')}
          ></game-choice-button>
          <game-choice-button
            choice="paper"
            @choice-button=${() => this.handlePlayerChoice('paper')}
          ></game-choice-button>
          <game-choice-button
            choice="scissors"
            @choice-button=${() => this.handlePlayerChoice('scissors')}
          ></game-choice-button>
        </div>
        <p class="game-message ${this.choiceMessage ? 'game-message--visible' : ''}" aria-live="polite">
          ${this.choiceMessage || ' '}
        </p>
        <p class="game-message ${this.winnerMessage ? 'game-message--visible' : ''}" aria-live="polite">
          ${this.winnerMessage || ' '}
        </p>
      </div>
    `;
  }
}

customElements.define('game-view', GameView);
