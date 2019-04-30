import { NIL_NODE, NIL_VALUE } from "../../bst/constants";
import { COLORS } from "../../red-black-trees/constants";
import { RedBlackNode } from "../RedBlackNode";

describe('Node getters', () => {
  describe('node.isRed', () => {
    it('should return true if color is red', () => {
      const node = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE, COLORS.BLACK);
      expect(node.isRed).toBeFalsy();
      node.color = COLORS.RED;
      expect(node.isRed).toBeTruthy();
    });
  });

  describe('node.isBlack', () => {
    it('should return true if color is black', () => {
      const node = new RedBlackNode(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE, COLORS.BLACK);
      expect(node.isBlack).toBeTruthy();
      node.color = COLORS.RED;
      expect(node.isBlack).toBeFalsy();
    });
  });
});
