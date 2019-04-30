import { isNil, NIL_NODE } from "./constants";

export class Node {
  constructor(value, parent, left, right) {
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.key = Math.random() * (1 - Math.random()) * Date.now();
  }

  newChild(value) {
    return new Node(value, this, NIL_NODE, NIL_NODE);
  }

  equals(node) {
    return !isNil(node) && (this.key === node.key);
  }

  push(value) {
    if (!this.value) {
      this.value = value;
      return this;
    }

    if (value < this.value) {
      return this.pushLeft(value);
    } else {
      return this.pushRight(value);
    }
  }

  pushLeft(value) {
    if (isNil(this.left)) {
      this.left = this.newChild(value);
      return this.left;
    }

    return this.left.push(value);
  }

  pushRight(value) {
    if (isNil(this.right)) {
      this.right = this.newChild(value);
      return this.right;
    }

    return this.right.push(value);
  }

  reverseLineage(child) {
    if (isNil(child)) {
      throw new Error('reverseLineage should NOT be called with an empty node');
    }

    if (isNil(child.parent) || !child.parent.equals(this)) {
      throw new Error('reverseLineage should not called on parent node to switch with its immediate child');
    }

    if (this.isLeftChild) {
      this.parent.left = child;
    }
    if (this.isRightChild) {
      this.parent.right = child;
    }

    child.parent = this.parent;
    this.parent = child;
  }

  rotateRight() {
    const { left } = this;
    this.reverseLineage(left);

    this.left = left.right;
    if (!isNil(this.left)) {
      this.left.parent = this;
    }
    left.right = this;
  }

  rotateLeft() {
    const { right } = this;
    this.reverseLineage(right);

    this.right = right.left;
    if (!isNil(this.right)) {
      this.right.parent = this;
    }
    right.left = this;
  }

  stripKeys() {
    delete this.key;
    if (!isNil(this.left)) {
      this.left.stripKeys();
    }
    if (!isNil(this.right)) {
      this.right.stripKeys();
    }
  }

  get isRoot() {
    return isNil(this.parent);
  }

  get isLeftChild() {
    return !isNil(this.parent) && this.equals(this.parent.left);
  }

  get isRightChild() {
    return !isNil(this.parent) && this.equals(this.parent.right);
  }

  get uncle() {
    const { isRoot, parent, grandparent } = this;
    if (isRoot || parent.isRoot) {
      return NIL_NODE;
    }

    return parent.isLeftChild ? grandparent.right : grandparent.left;
  }

  get grandparent() {
    if (isNil(this.parent) || isNil(this.parent.parent)) {
      return NIL_NODE;
    }

    return this.parent.parent;
  }
}
