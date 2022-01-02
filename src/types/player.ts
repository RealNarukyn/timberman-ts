import Timberman from '../actors/Timberman';
import Tree from '../actors/Tree';
import { KeyboardMap } from '../utils/keyboard-map';

export type Player = {
  timberman: Timberman;
  tree: Tree;
  keyboardMap: KeyboardMap;
};
