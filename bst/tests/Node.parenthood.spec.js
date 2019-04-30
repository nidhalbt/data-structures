import { NIL_NODE } from "../constants";
import { Node } from "../Node";

describe('Node.reverseLineage', () => {
  let root, left, right, leftLeft, leftRight, rightLeft, rightRight;

  beforeEach(() => {
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
  });

  it('should throw if called on node itself', () => {
    expect(() => left.reverseLineage(left)).toThrow();
  });

  it('should throw if called on child to switch with parent', () => {
    expect(() => left.reverseLineage(root)).toThrow();
  });

  it('should throw if called on unrelated nodes', () => {
    expect(() => left.reverseLineage(rightRight)).toThrow();
  });

  it('should throw if called on siblings', () => {
    expect(() => right.reverseLineage(left)).toThrow();
    expect(() => left.reverseLineage(right)).toThrow();
  });

  it('should take a node, make its child the parent', () => {
    root.reverseLineage(left);
    expect(left.parent).toEqual(NIL_NODE);
    expect(root.parent).toEqual(left);
  });

  it('should maintain the relationships with grandparent', () => {
    left.reverseLineage(leftLeft);
    expect(root.left).toEqual(leftLeft);
    right.reverseLineage(rightRight);
    expect(root.right).toEqual(rightRight);
  });
});
