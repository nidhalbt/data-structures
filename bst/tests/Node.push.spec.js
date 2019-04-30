import { NIL_NODE } from "../constants";
import { Node } from "../Node";

describe('Node.push', () => {
  let root, left, right;

  beforeEach(() => {
    root = new Node(20, NIL_NODE, NIL_NODE, NIL_NODE);
    left = new Node(10, root, NIL_NODE, NIL_NODE);
    right = new Node(30, root, NIL_NODE, NIL_NODE);
    root.left = left;
    root.right = right;
  });

  it('should push be left.left', () => {
    root.push(5);
    expect(left.left).toBeTruthy();
    expect(left.left.value).toBe(5);
  });

  it('should push be left.right', () => {
    root.push(15);
    expect(left.right).toBeTruthy();
    expect(left.right.value).toBe(15);
  });

  it('should push be left.right', () => {
    root.push(10);
    expect(left.right).toBeTruthy();
    expect(left.right.value).toBe(10);
  });

  it('should push be right.left', () => {
    root.push(25);
    expect(right.left).toBeTruthy();
    expect(right.left.value).toBe(25);
  });

  it('should push be right.left', () => {
    root.push(20);
    expect(right.left).toBeTruthy();
    expect(right.left.value).toBe(20);
  });

  it('should push be right.right', () => {
    root.push(35);
    expect(right.right).toBeTruthy();
    expect(right.right.value).toBe(35);
  });

  it('various tests', () => {
    root.push(5);
    root.push(0);
    root.push(15);
    root.push(9);
    root.push(30);
    root.push(10);
    root.push(12);
    root.push(33);
    root.push(29);
    expect(left.left.value).toBe(5);
    expect(left.left.left.value).toBe(0);
    expect(left.left.right.value).toBe(9);
    expect(left.right.value).toBe(15);
    expect(left.right.left.value).toBe(10);
    expect(left.right.left.right.value).toBe(12);
    expect(right.left.value).toBe(29);
    expect(right.right.value).toBe(30);
    expect(right.right.right.value).toBe(33);
  });

  it('a snapshot test', () => {
    const values = [40, 15, 46, 30, 41, 15, 26, 15, 45, 8, 17, 24, 23, 49, 38, 39, 24, 7, 34, 32];
    values.forEach(e => root.push(e));
    root.stripKeys();
    expect(root).toMatchSnapshot();
  });
});
