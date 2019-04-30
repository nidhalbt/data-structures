import { isNil, NIL_NODE, NIL_VALUE } from "../constants";
import { Node } from "../Node";

describe('Node getters', () => {
  describe('node.isRoot', () => {
    it('should be true if it node has no parent', () => {
      const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      expect(root.isRoot).toBeTruthy();
    });

    it('should be false if it node has parent', () => {
      const node = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      node.parent = node;
      expect(node.isRoot).toBeFalsy();
    });
  });

  describe('node.isLeftChild', () => {
    it('should return false for root', () => {
      const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      expect(root.isLeftChild).toBeFalsy();
    });

    it('should return true if node is left of its parent', () => {
      const parent = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      const child = new Node(NIL_VALUE, parent, NIL_NODE, NIL_NODE);
      parent.left = child;
      expect(child.isLeftChild).toBeTruthy();

      parent.left = NIL_NODE;
      parent.right = child;
      expect(child.isLeftChild).toBeFalsy();
    });
  });

  describe('node.isRightChild', () => {
    it('should return false for root', () => {
      const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      expect(root.isRightChild).toBeFalsy();
    });

    it('should return true if node is right of its parent', () => {
      const parent = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      const child = new Node(NIL_VALUE, parent, NIL_NODE, NIL_NODE);
      parent.left = child;
      expect(child.isRightChild).toBeFalsy();

      parent.left = NIL_NODE;
      parent.right = child;
      expect(child.isRightChild).toBeTruthy();
    });
  });

  describe('node.grandparent', () => {
    it('should return grandparent if it exists', () => {
      const grandparent = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      expect(isNil(grandparent.grandparent)).toBeTruthy();

      const parent = new Node(NIL_VALUE, grandparent, NIL_NODE, NIL_NODE);
      expect(isNil(parent.grandparent)).toBeTruthy();

      const child = new Node(NIL_VALUE, parent, NIL_NODE, NIL_NODE);
      expect(isNil(child.grandparent)).toBeFalsy();
      expect(child.grandparent).toEqual(grandparent);
    });
  });

  describe('node.uncle', () => {
    it('should return if root or root child', () => {
      const grandparent = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      expect(grandparent.uncle).toEqual(NIL_NODE);

      const parent = new Node(NIL_VALUE, grandparent, NIL_NODE, NIL_NODE);
      expect(parent.uncle).toEqual(NIL_NODE);
    });

    it(`should return grandparent's other child`, () => {
      const grandparent = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      const parent = new Node(NIL_VALUE, grandparent, NIL_NODE, NIL_NODE);
      const uncle = new Node(NIL_VALUE, grandparent, NIL_NODE, NIL_NODE);
      grandparent.left = parent;
      grandparent.right = uncle;

      const child = new Node(NIL_VALUE, parent, NIL_NODE, NIL_NODE);
      expect(child.uncle).toBeTruthy();
      expect(child.uncle).toEqual(uncle);

      child.parent = uncle;
      expect(child.uncle).toBeTruthy();
      expect(child.uncle).toEqual(parent);
    });
  });
});
