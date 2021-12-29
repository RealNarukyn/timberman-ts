import { facingENUM } from '../types/positions';

export interface KeyboardMap {
  [key: string]: facingENUM;
}

export const mapA: KeyboardMap = {
  ArrowLeft: facingENUM.LEFT,
  ArrowRight: facingENUM.RIGHT
};

export const mapB: KeyboardMap = {
  a: facingENUM.LEFT,
  A: facingENUM.LEFT,
  d: facingENUM.RIGHT,
  D: facingENUM.RIGHT
};
