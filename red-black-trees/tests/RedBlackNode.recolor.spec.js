import { NIL_NODE, NIL_VALUE } from "../../bst/constants";
import { COLORS } from "../constants";
import { RedBlackNode } from "../RedBlackNode";
import { RedBlackTree } from "../RedBlackTree";

describe('RedBlackNode.reColor', () => {
  let root, left, right, leftLeft, leftRight, rightLeft, rightRight;

  describe('root', () => {
    it('should set root color to black', () => {
      const node = new RedBlackNode();
      node.push(24);
      RedBlackNode.reColor(node);
      expect(node.isBlack).toBeTruthy();
    });
  });

  describe('red uncle', () => {
    const bfe = () => {
      root = new RedBlackNode(10, NIL_NODE, NIL_NODE, NIL_NODE, COLORS.BLACK);

      left = new RedBlackNode(10, root, NIL_NODE, NIL_NODE, COLORS.RED);
      root.left = left;

      right = new RedBlackNode(10, root, NIL_NODE, NIL_NODE, COLORS.RED);
      root.right = right;
    };

    beforeEach(bfe);

    it('should change parent and uncle color to black, grandparent to red, then retry from grandparent', () => {
      const node = root.push(5);
      RedBlackNode.reColor(node);
      expect(node.isRed).toBeTruthy();
      expect(root.isBlack).toBeTruthy();
      expect(left.isBlack).toBeTruthy();
      expect(right.isBlack).toBeTruthy();
      expect(left.left.isRed).toBeTruthy();
    });
  });

  describe('black uncle', () => {
    it('left left case', () => {
      const ten = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      ten.push(10);
      RedBlackNode.reColor(ten);

      const nine = ten.push(9);
      RedBlackNode.reColor(nine);

      const eight = ten.push(8);
      RedBlackNode.reColor(eight);

      expect(nine.isRoot).toBeTruthy();
      expect(nine.right).toEqual(ten);
      expect(nine.left).toEqual(eight);
      expect(nine.isBlack).toBeTruthy();
      expect(ten.isRed).toBeTruthy();
      expect(eight.isRed).toBeTruthy();
    });

    it('left right case', () => {
      const ten = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      ten.push(10);
      RedBlackNode.reColor(ten);

      const eight = ten.push(8);
      RedBlackNode.reColor(eight);

      const nine = ten.push(9);
      RedBlackNode.reColor(nine);

      expect(nine.isRoot).toBeTruthy();
      expect(nine.right).toEqual(ten);
      expect(nine.left).toEqual(eight);
      expect(nine.isBlack).toBeTruthy();
      expect(ten.isRed).toBeTruthy();
      expect(eight.isRed).toBeTruthy();
    });

    it('right left case', () => {
      const eight = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      eight.push(8);
      RedBlackNode.reColor(eight);
      const ten = eight.push(10);
      RedBlackNode.reColor(ten);
      const nine = eight.push(9);
      RedBlackNode.reColor(nine);

      expect(nine.isRoot).toBeTruthy();
      expect(nine.right).toEqual(ten);
      expect(nine.left).toEqual(eight);
      expect(nine.isBlack).toBeTruthy();
      expect(ten.isRed).toBeTruthy();
      expect(eight.isRed).toBeTruthy();
    });

    it('right right case', () => {
      const ten = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      ten.push(10);
      RedBlackNode.reColor(ten);

      const eleven = ten.push(11);
      RedBlackNode.reColor(eleven);

      const twelve = ten.push(12);
      RedBlackNode.reColor(twelve);

      expect(eleven.isRoot).toBeTruthy();
      expect(eleven.left).toEqual(ten);
      expect(eleven.right).toEqual(twelve);
      expect(eleven.isBlack).toBeTruthy();
      expect(ten.isRed).toBeTruthy();
      expect(twelve.isRed).toBeTruthy();
    });
  });

  describe('different benchmarks', () => {
    it('should match a known benchmark', () => {
      const values = [0, 12, 9, 0, 1, 35, 31, 3, 43, 37, 7, 36, 17, 2, 18, 32, 26, 12, 34, 9, 44, 37, 47, 9, 21, 37, 38, 45, 44, 18];
      const tree = new RedBlackTree();
      tree.batch(values);

      expect(tree.root.color).toEqual(COLORS.BLACK);
      expect(tree.root.value).toEqual(31);

      expect(tree.root.left.color).toEqual(COLORS.RED);
      expect(tree.root.left.value).toEqual(9);

      expect(tree.root.left.right.color).toEqual(COLORS.BLACK);
      expect(tree.root.left.right.value).toEqual(17);

      expect(tree.root.left.right.right.color).toEqual(COLORS.RED);
      expect(tree.root.left.right.right.value).toEqual(21);

      expect(tree.root.right.left.left.right.color).toEqual(COLORS.RED);
      expect(tree.root.right.left.left.right.value).toEqual(34);

      expect(tree.root.right.color).toEqual(COLORS.RED);
      expect(tree.root.right.value).toEqual(37);

      expect(tree.root.right.right.left.left.color).toEqual(COLORS.RED);
      expect(tree.root.right.right.left.left.value).toEqual(37);

      expect(tree.root.right.left.right.color).toEqual(COLORS.BLACK);
      expect(tree.root.right.left.right.value).toEqual(36);
    });

    it('should match snapshot', () => {
      const values = [43, 34, 19, 37, 36, 24, 12, 41, 30, 40, 35, 50, 27, 48, 35, 13, 43, 3, 7, 46, 31, 27, 5, 43, 46, 27, 47, 45, 3, 29];
      const tree = new RedBlackTree();
      tree.batch(values);
      tree.root.stripKeys();
      expect(tree.root).toMatchSnapshot();
    });
  });
});
