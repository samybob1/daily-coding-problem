const { XORLinkedList } = require("./6");

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
