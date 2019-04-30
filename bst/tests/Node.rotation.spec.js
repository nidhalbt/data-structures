import { NIL_NODE } from "../constants";
import { Node } from "../Node";

describe('Node.rotate', () => {
  let root, left, right, leftLeft, leftRight, rightLeft, rightRight;

  const bfe = () => {
    root = new Node(10, NIL_NODE, NIL_NODE, NIL_NODE);

    left = new Node(10, root, NIL_NODE, NIL_NODE);
    leftLeft = new Node(10, left, NIL_NODE, NIL_NODE);
    leftRight = new Node(10, left, NIL_NODE, NIL_NODE);
    root.left = left;
    left.left = leftLeft;
    left.right = leftRight;

    right = new Node(10, root, NIL_NODE, NIL_NODE);
    rightLeft = new Node(10, right, NIL_NODE, NIL_NODE);
    rightRight = new Node(10, right, NIL_NODE, NIL_NODE);
    root.right = right;
    right.left = rightLeft;
    right.right = rightRight;
  };

  beforeEach(bfe);

  describe('Node.rotateRight', () => {
    it('should rotate root', () => {
      root.rotateRight();
      expect(root.parent).toEqual(left);
      expect(root.right).toEqual(right);
      expect(root.left).toEqual(leftRight);
      expect(left.right).toEqual(root);
      expect(left.left).toEqual(leftLeft);
    });

    it('should rotate left', () => {
      left.rotateRight();
      expect(left.parent).toEqual(leftLeft);
      expect(left.right).toEqual(leftRight);
      expect(left.left).toEqual(NIL_NODE);
      expect(leftLeft.right).toEqual(left);
      expect(root.left).toEqual(leftLeft);
    });

    it('should rotate right', () => {
      right.rotateRight();
      expect(right.parent).toEqual(rightLeft);
      expect(right.left).toEqual(NIL_NODE);
      expect(right.right).toEqual(rightRight);
      expect(rightLeft.right).toEqual(right);
      expect(root.right).toEqual(rightLeft);
    });

    it('should throw on rotate rightLeft', () => {
      expect(() => rightLeft.rotateRight()).toThrow();
    });

    it('should throw on rotate rightRight', () => {
      expect(() => rightRight.rotateRight()).toThrow();
    });

    it('should throw on rotate leftRight', () => {
      expect(() => leftRight.rotateRight()).toThrow();
    });

    it('should throw on rotate leftLeft', () => {
      expect(() => leftLeft.rotateRight()).toThrow();
    });
  });

  describe('Node.rotateLeft', () => {
    it('should rotate root', () => {
      root.rotateLeft();
      expect(root.parent).toEqual(right);
      expect(root.left).toEqual(left);
      expect(root.right).toEqual(rightLeft);
      expect(right.left).toEqual(root);
      expect(right.right).toEqual(rightRight);
    });
    it('should rotate left', () => {
      left.rotateLeft();
      expect(left.parent).toEqual(leftRight);
      expect(left.left).toEqual(leftLeft);
      expect(left.right).toEqual(NIL_NODE);
      expect(leftRight.parent).toEqual(root);
      expect(root.left).toEqual(leftRight);
    });
    it('should rotate right', () => {
      right.rotateLeft();
      expect(right.parent).toEqual(rightRight);
      expect(right.left).toEqual(rightLeft);
      expect(right.right).toEqual(NIL_NODE);
      expect(rightRight.parent).toEqual(root);
      expect(root.right).toEqual(rightRight);
    });

    it('should throw on rotate rightLeft', () => {
      expect(() => rightLeft.rotateLeft()).toThrow();
    });

    it('should throw on rotate rightRight', () => {
      expect(() => rightRight.rotateLeft()).toThrow();
    });

    it('should throw on rotate leftRight', () => {
      expect(() => leftRight.rotateLeft()).toThrow();
    });

    it('should throw on rotate leftLeft', () => {
      expect(() => leftLeft.rotateLeft()).toThrow();
    });
  });
});
