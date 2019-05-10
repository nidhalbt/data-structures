import { NIL_NODE, NIL_VALUE } from "../constants";
import { Node } from "../Node";

describe('inorderWalk', () => {
  it('should return the values ordered', () => {
    const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
    const sorted = [];
    const values = [0, 12, 9, 0, 1, 35, 31, 3, 43, 37, 7, 36, 17, 2, 18, 32, 26, 12, 34, 9, 44, 37, 47, 9, 21, 37, 38, 45, 44, 18];

    values.forEach(value => root.push(value));
    root.inorderWalk(node => sorted.push(node.value));

    values.sort((e1, e2) => e1 - e2);
    expect(sorted).toEqual(values);
  });
});

describe('search', () => {
  it('should return NIL if node reached has null value', () => {
    const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
    expect(root.search(NIL_VALUE)).toEqual(NIL_NODE);
  });

  it('should return NIL if not found', () => {
    const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
    const values = [0, 12, 9, 0, 1, 35, 31, 3, 43, 37, 7, 36, 17, 2, 18, 32, 26, 12, 34, 9, 44, 37, 47, 9, 21, 37, 38, 45, 44, 18];
    values.forEach(value => root.push(value));
    expect(root.search(99)).toEqual(NIL_NODE);
    expect(root.search(-4)).toEqual(NIL_NODE);
  });

  it('should return the node if value exists', () => {
    const root = new Node(NIL_VALUE, NIL_NODE, NIL_NODE, NIL_NODE);
    const values = [0, 12, 9, 0, 1, 35, 31, 3, 43, 37, 7, 36, 17, 2, 18, 32, 26, 12, 34, 9, 44, 37, 47, 9, 21, 37, 38, 45, 44, 18];
    values.forEach(value => root.push(value));
    expect(root.search(0)).toBeTruthy();
    expect(root.search(21)).toBeTruthy();
  });
});

