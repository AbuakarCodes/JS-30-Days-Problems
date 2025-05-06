var TimeLimitedCache = function() {
  this.map = new Map();
};

TimeLimitedCache.prototype.set = function(key, value, duration) {
  const exists = this.map.has(key);
  if (exists) {
      clearTimeout(this.map.get(key)[1]);
  }

  const timeoutID = setTimeout(() => {
      this.map.delete(key);
  }, duration);

  this.map.set(key, [value, timeoutID]);

  return exists;
};

TimeLimitedCache.prototype.get = function(key) {
  if (this.map.has(key)) {
      return this.map.get(key)[0];
  }
  return -1;
};

TimeLimitedCache.prototype.count = function() {
  return this.map.size;
};

// Example usage:
const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1));           // 42
console.log(timeLimitedCache.count());          // 1

setTimeout(() => {
console.log(timeLimitedCache.get(1));         // -1
console.log(timeLimitedCache.count());        // 0
}, 1500);

