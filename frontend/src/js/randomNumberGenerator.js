function generate(min = 0, max = Number.MAX_SAFE_INTEGER) {
  return Math.random() * (max - min) + min;
}

module.exports = generate;