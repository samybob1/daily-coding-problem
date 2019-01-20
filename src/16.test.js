/**
 * @overview This problem was asked by Twitter.
 *
 * You run an e-commerce website and want to record the last N order ids in a
 * log. Implement a data structure to accomplish this, with the following API:
 *
 * * record(order_id): adds the order_id to the log
 * * get_last(i): gets the ith last element from the log. i is guaranteed to be
 * smaller than or equal to N.
 *
 * You should be as efficient with time and space as possible.
 */

const Recorder = require("./16");

test("to return the 5th last element", () => {
  const recorder = new Recorder(10);

  for (let i = 0; i < 20; i++) {
    recorder.record(i);
  }

  expect(recorder.getLast(5)).toBe(15);
});
