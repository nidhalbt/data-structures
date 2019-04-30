import { NIL_NODE, NIL_VALUE } from "../../bst/constants";
import { COLORS } from "../constants";
import { RedBlackNode } from "../RedBlackNode";

describe('RedBlackNode various', () => {
  describe('exchangeColors', () => {
    it('should exchange node colors', () => {
      const node = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE, COLORS.BLACK);
      const node2 = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE, COLORS.RED);

      node.exchangeColors(node2);

      expect(node.isBlack).toBeFalsy();
      expect(node.isRed).toBeTruthy();
      expect(node2.isRed).toBeFalsy();
      expect(node2.isBlack).toBeTruthy();
    });
  });

  describe('root', () => {
    let root, left, right, depth2, depth3;

    it('should return rootNode', () => {
      root = new RedBlackNode(10, NIL_NODE, NIL_NODE, NIL_NODE, COLORS.BLACK);
      left = new RedBlackNode(10, root, NIL_NODE, NIL_NODE, COLORS.RED);
      right = new RedBlackNode(10, root, NIL_NODE, NIL_NODE, COLORS.RED);
      depth2 = new RedBlackNode(10, right, NIL_NODE, NIL_NODE, COLORS.RED);
      depth3 = new RedBlackNode(10, right, NIL_NODE, NIL_NODE, COLORS.RED);
      expect(root.getRootNode()).toEqual(root);
      expect(left.getRootNode()).toEqual(root);
      expect(right.getRootNode()).toEqual(root);
      expect(depth2.getRootNode()).toEqual(root);
      expect(depth3.getRootNode()).toEqual(root);
    });
  });
});
