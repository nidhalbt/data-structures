import { NIL_NODE, NIL_VALUE } from "../bst/constants";
import { COLORS } from "./constants";
import { RedBlackNode } from "./RedBlackNode";

export class RedBlackTree {
  constructor() {
    this.root = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE, COLORS.BLACK);
  }

  batch(values) {
    this.root = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);

    values.forEach((value) => {
      const node = this.root.push(value);
      this.root = RedBlackNode.reColor(node);
    });
  }

  one(value) {
    const node = this.root.push(value);
    this.root = this.root.getRootNode();
    return node;
  }
}
