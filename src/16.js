/**
 * Records the last N order ids in a log
 */
class Recorder {
  /**
   * @constructor
   * @param {number} n - Number of order ids to record
   */
  constructor(n) {
    this.n = n;
    this.orderIds = [];
  }

  /**
   * Records an order id
   *
   * @param {*} orderId
   */
  record(orderId) {
    if (this.orderIds.length === this.n) {
      this.orderIds.pop();
    }

    this.orderIds.unshift(orderId);
  }

  /**
   * Gets the ith last order id
   *
   * @param {number} i
   * @returns {*}
   */
  getLast(i) {
    return this.orderIds[i - 1];
  }
}

module.exports = Recorder;
