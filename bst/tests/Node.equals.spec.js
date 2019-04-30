import { NIL_NODE, NIL_VALUE } from "../constants";
import { Node } from "../Node";

describe('Node', () => {
  it('should pass', () => {
    const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
  });

  describe('equals', () => {
    it('should fail for different nodes', () => {
      const node = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      const node2 = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      expect(node.equals(node2)).toBeFalsy();
    });

    it('should succede for same key nodes', () => {
      const node = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      const node2 = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
      node2.key = node.key;
      expect(node.equals(node2)).toBeTruthy();
      expect(node.equals(node)).toBeTruthy();
    });
  });
});
