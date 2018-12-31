/**
 * @overview This problem was asked by Google.
 *
 * An XOR linked list is a more memory efficient doubly linked list. Instead of
 * each node holding next and prev fields, it holds a field named both, which is
 * an XOR of the next node and the previous node. Implement an XOR linked list;
 * it has an add(element) which adds the element to the end, and a get(index)
 * which returns the node at index.
 *
 * If using a language that has no pointers (such as Python), you can assume you
 * have access to get_pointer and dereference_pointer functions that converts
 * between nodes and memory addresses.
 */

const { XORLinkedList } = require("./06");

test("XOR linked list to add elements", () => {
  const list = new XORLinkedList();

  list.add("val 1");
  list.add("val 2");
  list.add("val 3");

  expect(list.length).toBe(3);
});

test("XOR linked list to get element", () => {
  const list = new XORLinkedList();

  list.add("val 1");
  list.add("val 2");
  list.add("val 3");
  list.add("val 4");
  list.add("val 5");
  list.add("val 6");
  list.add("val 7");
  list.add("val 8");
  list.add("val 9");

  const tail = list.get(8);
  expect(tail.val).toBe("val 9");
});
