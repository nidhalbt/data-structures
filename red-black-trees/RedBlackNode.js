import { isNil, NIL_NODE } from "../bst/constants";
import { Node } from "../bst/Node";
import { COLORS } from "./constants";

export class RedBlackNode extends Node {
  constructor(value, parent, left, right, color) {
    super(value, parent, left, right);
    this.color = color;
  }

  static reColor(node) {
    if (node.isRoot) {
      node.color = COLORS.BLACK;
      return node;
    }

    const { uncle, parent, grandparent, uncleIsBlack, uncleIsRed } = node;

    if (parent.isRed) {
      if (uncleIsRed) {
        parent.color = COLORS.BLACK;
        uncle.color = COLORS.BLACK;
        // if uncle is not Nil a node than grandparent is guaranteed to not be Nil
        grandparent.color = COLORS.RED;
        return RedBlackNode.reColor(grandparent);
      } else if (uncleIsBlack) {
        if (parent.isLeftChild && node.isLeftChild) {
          grandparent.rotateRight();
          grandparent.exchangeColors(parent);
          return grandparent.getRootNode();
        }
        if (parent.isLeftChild && node.isRightChild) {
          parent.rotateLeft();
          grandparent.rotateRight();
          grandparent.exchangeColors(node);
          return grandparent.getRootNode();
        }
        if (parent.isRightChild && node.isRightChild) {
          grandparent.rotateLeft();
          grandparent.exchangeColors(parent);
          return grandparent.getRootNode();
        }
        if (parent.isRightChild && node.isLeftChild) {
          parent.rotateRight();
          grandparent.rotateLeft();
          grandparent.exchangeColors(node);
          return grandparent.getRootNode();
        }
      }
    }

    return node.getRootNode();
  }

  newChild(value) {
    return new RedBlackNode(value, this, NIL_NODE, NIL_NODE, COLORS.RED);
  }

  exchangeColors(node) {
    const color = this.color;
    this.color = node.color;
    node.color = color;
  }

  getRootNode() {
    if (this.isRoot) {
      return this;
    }
    return this.parent.getRootNode();
  }

  get isRed() {
    return this.color === COLORS.RED;
  }

  get isBlack() {
    return this.color === COLORS.BLACK;
  }

  get uncleIsBlack() {
    const { uncle, grandparent } = this;
    // nodes which are not initialized are considered black
    return (grandparent && isNil(uncle)) || (!isNil(uncle) && uncle.isBlack);
  }

  get uncleIsRed() {
    const { uncle } = this;
    return !isNil(uncle) && uncle.isRed;
  }
}
