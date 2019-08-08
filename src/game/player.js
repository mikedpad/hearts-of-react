import { generate } from 'shortid';

export default class Player {
  constructor(name, score = 0) {
    this.id = generate();
    this.name = name;
    this.score = score;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getScore() {
    return this.score;
  }

  setScore(score) {
    this.score = Number.parseInt(score, 10);
  }

  addScore(value) {
    this.score = this.score + Number.parseInt(value, 10);
  }

  subtractScore(value) {
    this.score = this.score - Number.parseInt(value, 10);
  }
}
