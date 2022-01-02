import Timberman from '../actors/timberman';
import Tree from '../actors/tree';
import { KeyboardMap } from '../utils/keyboard-map';

export type Player = {
  timberman: Timberman;
  tree: Tree;
  keyboardMap: KeyboardMap;
};
